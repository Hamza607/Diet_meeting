import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { Form, Switch, Upload } from "antd";
import { IoAddOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import type { IStartMeetingScreen } from "@types";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { useAppContext, useForumContext } from "@context";
import { ICON, POST_CATEGORIES_TAGS } from "@constants";
import {
  AppFormItem,
  CategoryButton,
  AudioPopup,
  CameraPopup,
} from "@components";
import { LiveButton } from "@startLiveMeetingsComponents";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const StartLiveMeetingScreen: React.FC<IStartMeetingScreen> = ({
  linkProduct,
  handleChangeLinkProduct,
  fileList,
  handleFileListChange,
  handleOpenCategoryModal,
  handleCategoryClick,
  isMuted,
  setIsMuted,
  camera,
  setCamera,
  scheduleMeeting,
  setScheduleMeeting,
  anchorEl,
  setAnchorEl,
  cameraEl,
  setCameraEl,
  customDate,
  datePickerAnchor,
  setDatePickerAnchor,
  handleCustomDateSelect,
  handleAudioPopupClick,
  handleClickCameraDot,
}) => {
  const { handleShareClick } = useAppContext();
  const { postCategories } = useForumContext();
  const format = "HH:mm A";
  return (
    <Box>
      <Typography variant="h1" className="mb-7 mt-4 md:mt-0">
        Start a meeting
      </Typography>
      <Box className={"flex gap-4 md:gap-16 md:!flex-row !flex-col-reverse"}>
        <Box className="md:w-[469px]">
          <Form name="post-form" layout="vertical">
            <AppFormItem
              type="input"
              name="title"
              label="Title"
              placeholder="Enter Title"
              itemClassName="max-w-[824px]"
              inputClassName="!bg-white-strong"
              required
              requiredIcon={true}
              message="Please enter a title"
            />
            <AppFormItem
              type="message"
              name="description"
              label="Description"
              placeholder="Enter Post"
              itemClassName="max-w-[824px]"
              inputClassName="!bg-white-strong"
              autoSize={{ minRows: 4, maxRows: 4 }}
              message="Please enter a post"
            />
            <AppFormItem type="others" name="category" label="Category Tags">
              <Box className="mt-1 flex flex-wrap sm:gap-3 gap-2">
                <CategoryButton
                  type="secondary"
                  onClick={handleOpenCategoryModal}
                >
                  <IoAddOutline className="text-[1.5rem]" />
                </CategoryButton>
                {postCategories.map((category) => {
                  const categoryData = POST_CATEGORIES_TAGS.find(
                    (cat) => cat.label === category
                  );
                  const width = categoryData ? categoryData.width : "auto";
                  return (
                    <CategoryButton
                      key={category}
                      type="primary"
                      className={`sm:${width} justify-start`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <IoClose className="text-xl sm:mx-2 mx-1" />
                      {category}
                    </CategoryButton>
                  );
                })}
              </Box>
            </AppFormItem>
            <AppFormItem type="others" name="link-switch">
              <Box>
                <Box className="flex items-center gap-2 py-4">
                  <Switch
                    className="min-w-[34px] h-[20px] !bg-gray-thinnest aria-checked:!bg-primary-main"
                    //   checked={linkProduct}
                    //   onChange={handleChangeLinkProduct}
                  />
                  <Typography className="sm:text-[15px] text-sm">
                    Allow others to Join
                  </Typography>
                </Box>
                <Box className="flex items-center gap-3">
                  <Box component="img" src={ICON.FORUM.PRODUCT_LOCK_ICON} />
                  <Typography className="text-xs text-secondary-thin">
                    One way presentation mode is not available for members
                  </Typography>
                </Box>
                <Box className="flex items-center gap-2 py-4">
                  <Switch
                    className="min-w-[34px] h-[20px] !bg-gray-thinnest aria-checked:!bg-primary-main"
                    //   checked={linkProduct}
                    //   onChange={handleChangeLinkProduct}
                  />
                  <Typography className="sm:text-[15px] text-sm">
                    Enable live chat
                  </Typography>
                </Box>

                <Box className="flex items-center gap-2 py-4">
                  <Switch
                    className="min-w-[34px] h-[20px] !bg-gray-thinnest aria-checked:!bg-primary-main"
                    checked={scheduleMeeting}
                    onChange={(value) => setScheduleMeeting(value)}
                  />
                  <Typography className="sm:text-[15px] text-sm">
                    Schedule Meeting
                  </Typography>
                </Box>
                <Box className="flex items-center gap-3">
                  <Box component="img" src={ICON.FORUM.PRODUCT_LOCK_ICON} />
                  <Typography className="text-xs text-secondary-thin">
                    Scheduling in advance is not available for members
                  </Typography>
                </Box>
                {scheduleMeeting && (
                  <Box className={"flex gap-4 my-4 relative"}>
                    <Box>
                      <Typography className="font-inter-medium text-md mb-2">
                        {" "}
                        Date{" "}
                        <Box component={"span"} className="text-error-main">
                          *
                        </Box>
                      </Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={customDate}
                          onChange={handleCustomDateSelect}
                          open={Boolean(datePickerAnchor)}
                          onClose={() => setDatePickerAnchor(null)}
                          disablePast
                          slotProps={{
                            popper: {
                              anchorEl: datePickerAnchor,
                              placement: "bottom-start",
                            },
                            textField: {
                              sx: { display: "none" }, // Hide the text field
                            },
                          }}
                        />
                        <Box
                          className={`h-[44px] flex items-center px-2 w-[150px] border-[1px] border-solid border-secondary-light ${
                            customDate ? "" : "text-secondary-thin"
                          } !bg-white-main rounded text-[14px] font-medium font-inter-medium text-black-main !shadow-none placeholder:text-secondary-thin hover:border-primary-main focus:border-primary-main cursor-pointer`}
                          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                            setDatePickerAnchor(event.currentTarget)
                          }
                        >
                          {customDate
                            ? `${customDate?.format("MM-DD-YYYY")}`
                            : "Select Date"}
                        </Box>
                      </LocalizationProvider>
                    </Box>
                    <Box>
                      <Typography className="font-inter-medium text-md mb-2">
                        {" "}
                        Time{" "}
                        <Box component={"span"} className="text-error-main">
                          *
                        </Box>
                      </Typography>

                      <TimePicker
                        rootClassName="h-[44px] border border-secondary-thin hover:border-primary-main focus:border-primary-main"
                        defaultValue={dayjs("12:00 P", format)}
                        format={format}
                        use12Hours
                      />
                    </Box>
                  </Box>
                )}
                <Box className="flex items-center gap-2 py-4">
                  <Switch
                    className="min-w-[34px] h-[20px] !bg-gray-thinnest aria-checked:!bg-primary-main"
                    checked={linkProduct}
                    onChange={handleChangeLinkProduct}
                  />
                  <Typography className="sm:text-[15px] text-sm">
                    Link Product
                  </Typography>
                </Box>
                <Box className="flex items-center gap-3">
                  <Box component="img" src={ICON.FORUM.PRODUCT_LOCK_ICON} />
                  <Typography className="text-xs text-secondary-thin">
                    Adding a product is not available for members
                  </Typography>
                </Box>
              </Box>
            </AppFormItem>
            {linkProduct && (
              <Fragment>
                <AppFormItem
                  type="input"
                  name="product-name"
                  label="Product Name"
                  placeholder="Enter Product Name"
                  inputClassName="!bg-white-strong"
                  required
                  requiredIcon
                  message="Please enter a product name"
                />
                <AppFormItem
                  type="input"
                  name="product-link"
                  label="Product Link"
                  placeholder="Enter Product Link"
                  inputClassName="!bg-white-strong"
                  message="Please enter a product link"
                />
                <AppFormItem
                  type="message"
                  name="product-description"
                  label="Description"
                  placeholder="Enter Post"
                  inputClassName="!bg-white-strong"
                  autoSize={{ minRows: 4, maxRows: 4 }}
                  message="Please enter a post"
                />
                <AppFormItem
                  type="others"
                  name="product-image"
                  label="Product Image"
                  itemClassName="ml-2"
                >
                  <Box className="relative w-fit mb-4">
                    {fileList.length < 1 && (
                      <Box className="w-[120px] h-[120px] bg-white-strong rounded-[20px] modal-shadow flex items-center justify-center">
                        <FaImage className="text-5xl text-secondary-main" />
                      </Box>
                    )}
                    <Upload
                      listType="picture-card"
                      accept="image/*"
                      maxCount={1}
                      fileList={fileList}
                      onChange={handleFileListChange}
                      beforeUpload={() => false}
                      className={`${
                        fileList.length < 1
                          ? "!w-fit !h-fit"
                          : "!w-[120px] !h-[120px] rounded-[20px] overflow-hidden modal-shadow"
                      }`}
                    >
                      <Box className="!w-[25.5px] !h-[25.5px] !bg-white-main border-[2px] border-solid border-primary-main rounded-[2px] flex items-center justify-center absolute -bottom-[6px] -right-[6px] z-[2]">
                        <FaPlus className="text-primary-main text-sm" />
                      </Box>
                    </Upload>
                  </Box>
                </AppFormItem>
              </Fragment>
            )}
          </Form>
        </Box>
        <Box className="md:w-[480px] ">
          <Typography className="text-secondary-light text-md text-center font-inter-regular font-normal">
            Setup your audio and video before going live
          </Typography>

          <Box className="w-full rounded-[16px] h-[360px] bg-black-main mt-8">
            <Box
              component={"img"}
              src={ICON.STARLIVEMEETING.VIDEOIMAGE}
              className="w-full h-full"
            ></Box>
          </Box>

          <Box className={"flex justify-center gap-4 mt-4"}>
            <Box className="w-[90px] flex justify-between items-center gap-[0px] border-[1px] border-solid border-primary-main text-white-main bg-opacity-50 h-[48px] px-2  rounded-[8px]">
              <Box
                onClick={() => setIsMuted(!isMuted)}
                component={"img"}
                src={`${
                  isMuted
                    ? ICON.DASHBOARD.MICPURPLE
                    : ICON.DASHBOARD.MUTEMICPURPLE
                }`}
                alt="Mic"
                className=" w-[17px] h-[26px] lg:w-[26px] lg:h-[26px] mr-2 cursor-pointer"
              />

              <Box className="w-[0.5px] h-full bg-primary-main"></Box>
              <Box
                onClick={handleAudioPopupClick}
                className=" flex justify-center items-center cursor-pointer"
              >
                <Box
                  component={"img"}
                  src={ICON.CONTENTHUB.PURPLEDOT}
                  className="w-[20px] h-[20px]"
                />
              </Box>
              <AudioPopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
            </Box>
            <Box className="w-[90px] flex items-center gap-[9px] border-[1px] border-solid border-primary-main text-white-main bg-opacity-50 h-[48px] px-2  rounded-[8px]">
              <Box
                onClick={() => setCamera(!camera)}
                component={"img"}
                src={`${
                  camera
                    ? ICON.DASHBOARD.CAMERAPURPLE
                    : ICON.DASHBOARD.MUTECAMERAPURPLE
                }`}
                alt="Mic"
                className=" w-[17px] h-[26px] lg:w-[26px] lg:h-[26px] pl-1 mr-2 cursor-pointer"
              />

              <Box className="w-[0.5px] h-full bg-primary-main"></Box>

              <Box
                onClick={handleClickCameraDot}
                className=" flex justify-center items-center cursor-pointer"
              >
                <Box
                  component={"img"}
                  src={ICON.CONTENTHUB.PURPLEDOT}
                  className="w-[20px] h-[20px]"
                />
              </Box>
              <CameraPopup anchorEl={cameraEl} setAnchorEl={setCameraEl} />
            </Box>
          </Box>
          <Box className="md:block hidden">
            <LiveButton handleShareClick={handleShareClick} />
          </Box>
        </Box>
      </Box>
      <Box className="block md:hidden">
        <LiveButton handleShareClick={handleShareClick} />
      </Box>
    </Box>
  );
};

export default StartLiveMeetingScreen;
