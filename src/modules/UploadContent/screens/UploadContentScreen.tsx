import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { Form, Switch, Upload } from "antd";
import { IoAddOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import type { IUploadedContentScreen } from "@types";
import { TimePicker } from "antd";
import dayjs from "dayjs";

import { ICON, POST_CATEGORIES_TAGS, ROUTES } from "@constants";
import { AppFormItem, CategoryButton, AppButton } from "@components";
import { useForumContext } from "@context";
import { useNavigate } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const UploadContentScreen: React.FC<IUploadedContentScreen> = ({
  contentId,
  linkProduct,
  handleChangeLinkProduct,
  fileList,
  handleFileListChange,
  handleOpenCategoryModal,
  handleCategoryClick,
  scheduleMeeting,
  setScheduleMeeting,
  customDate,
  datePickerAnchor,
  setDatePickerAnchor,
  fileInputRef,
  videoUrl,
  handleButtonClick,
  handleFileChange,
  handleCustomDateSelect
}) => {
  const { postCategories } = useForumContext();

  const navigate = useNavigate();
  const format = "HH:mm A";

  return (
    <Box>
      <Typography variant="h1" className="mb-7 mt-4 md:mt-0">
        Upload Content
      </Typography>
      <Box className={"flex gap-4 md:gap-16 md:!flex-row !flex-col-reverse"}>
        <Box className="md:w-[469px]">
          <Form name="post-form" layout="vertical">
            <AppFormItem
              type="input"
              name="title"
              label="Title"
              placeholder="Enter Title"
              defaultValue={contentId ? "Lorem ipsum" : ""}
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
              defaultValue={
                contentId
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."
                  : ""
              }
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
            {!contentId && (
              <AppFormItem type="others" name="link-switch">
                <Box>
                  <Box className="flex items-center gap-2 py-4">
                    <Switch
                      className="min-w-[34px] h-[20px] !bg-gray-thinnest aria-checked:!bg-primary-main"
                      checked={scheduleMeeting}
                      onChange={(value) => setScheduleMeeting(value)}
                    />
                    <Typography className="sm:text-[15px] text-sm">
                      Schedule Release Time
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
                            onClick={(
                              event: React.MouseEvent<HTMLDivElement>
                            ) => setDatePickerAnchor(event.currentTarget)}
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
                          suffixIcon={false}
                          use12Hours
                        />
                      </Box>
                    </Box>
                  )}
                </Box>
              </AppFormItem>
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
            {linkProduct && (
              <Fragment>
                <AppFormItem
                  type="input"
                  name="product-name"
                  label="Product Name"
                  placeholder="Enter Product Name"
                  defaultValue={contentId ? "Mojo" : ""}
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
                  defaultValue={
                    contentId
                      ? "https://www.amazon.com/Professional-Monitoring-Ketosis-Portable-Analyzer/dp/B0F8BMH9P1/ref=sr_1_4_sspa?crid=15GH3VDVO9O33&dib=eyJ2IjoiMSJ9.q8H8GC-ZepD-w2ByqYmPUIVMo-5dgcBiL_ZaE039WCbhcrCRHMezujlsYq6RlzZEeh5PtXYLoIcTtjTnN9kRay1KCX3XgZcCF6FNPMp3btzTWnR9yzeGYRlrPUc2xeiIEq_sVVLD5WB-BOf56dToSWWrV_ryLAWH5wHtFII3hctPX-4mxg69TBPbYmuNUm0qK5RXBeqkv7eJh8SVpprmDpB1EKqbjCKZyz1bkTQjPOmmlEA2P5PPXn3MxZkV0IW0mctW3jM21cuebhWemridj0teshKOo068FdHOFS_ui9Y.qbbyAkimxxMWKLwaHBuv1ZBW6_AQSq7nK2o-rrWUGG0&dib_tag=se&keywords=keto%2Bmojo%2Bdevice&qid=1750885934&sprefix=mojo%2Bdev%2Caps%2C379&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
                      : ""
                  }
                  inputClassName="!bg-white-strong"
                  message="Please enter a product link"
                />
                <AppFormItem
                  type="message"
                  name="product-description"
                  label="Description"
                  placeholder="Enter Post"
                  defaultValue={
                    contentId
                      ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. "
                      : ""
                  }
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
        <Box className="md:w-[480px]">
          {!videoUrl && (
            <Typography className="text-secondary-light text-md text-center font-inter-regular font-normal">
              Upload your video to see the thumbnail
            </Typography>
          )}

          <Box className="w-full rounded-[16px] relative h-[360px] bg-white-light flex justify-center items-center mt-8">
            {videoUrl ? (
              <Box
                component={"video"}
                src={videoUrl}
                controls
                className="w-full h-full object-cover rounded shadow"
              />
            ) : (
              <Box
                component={"img"}
                src={ICON.STARLIVEMEETING.UPLOADCONTENTICON}
                className="w-[54px] h-[54px]"
              ></Box>
            )}
          </Box>
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <Box className="flex justify-center mt-4">
            <AppButton
              onClick={handleButtonClick}
              className="!h-[32px]  !w-[154px] text-sm font-inter-medium"
            >
              {videoUrl ? "Change File" : " Select File"}
            </AppButton>
          </Box>
          <Box className="md:block hidden my-4">
            <AppButton
              styleType={videoUrl ? "normal" : "disabled"}
              className="!h-[48px] "
              onClick={() =>
                navigate(
                  `${ROUTES.DASHBOARD_STAR_LIVE_MEETING_LIVE.replace(
                    ":id",
                    String("1")
                  )}`
                )
              }
            >
              <Box className="flex items-center gap-2">
                <Box
                  component={"img"}
                  src={
                    videoUrl
                      ? ICON.CONTENTHUB.UPLOADCONTENTWHITE
                      : ICON.CONTENTHUB.UPLOADCONTENTICON
                  }
                  className="w-[20px] h-[20px]"
                />

                <Typography
                  className={`${
                    videoUrl ? " text-white-main" : "text-secondary-light"
                  }  font-inter-medium`}
                >
                  {contentId ? "Save" : "Upload Content"}
                </Typography>
              </Box>
            </AppButton>
          </Box>
        </Box>
      </Box>
      <Box className="block md:hidden">
        {/* <LiveButton handleShareClick={handleShareClick} /> */}
        <AppButton
          styleType={videoUrl ? "normal" : "disabled"}
          className="!h-[48px] "
          onClick={() =>
            navigate(
              `${ROUTES.DASHBOARD_STAR_LIVE_MEETING_LIVE.replace(
                ":id",
                String("1")
              )}`
            )
          }
        >
          <Box className="flex items-center gap-2">
            <Box
              component={"img"}
              src={ICON.CONTENTHUB.UPLOADCONTENTWHITE}
              className="w-[20px] h-[20px]"
            />

            <Typography className="text-white-main font-inter-medium">
              Upload Content
            </Typography>
          </Box>
        </AppButton>
      </Box>
    </Box>
  );
};

export default UploadContentScreen;
