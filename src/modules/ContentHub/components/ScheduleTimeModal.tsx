import { AppButton, AppModal, CommonDatePicker } from "@components";
import { Box, Typography, IconButton, ClickAwayListener } from "@mui/material";
import { ICON } from "@constants";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import type {IScheduleTimeModal} from "@types"


const ScheduleTimeModal: React.FC<IScheduleTimeModal> = ({ open, onClose }) => {
  const [customDate, setCustomDate] = useState<any>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const format = "HH:mm A";
  return (
    <>
      <AppModal
        open={open}
        onClose={onClose}
        contentClassName="w-full md:max-w-[540px]  rounded-[20px]   p-[12px] "
      >
        <ClickAwayListener onClickAway={onClose}>
          <Box>
            <Box className="flex justify-end w-full mr-0 lg:mr-20">
              <IconButton onClick={onClose}>
                <Box
                  component={"img"}
                  src={ICON.DASHBOARD.MODALCLOSE}
                  alt=""
                  className="w-[24px] h-[24px]"
                />
              </IconButton>
            </Box>
            <Box className="flex flex-col gap-3 md:gap-7  relative">
              {/* Title */}
              <Box className="flex items-center gap-2 ">
                <Box
                  component={"img"}
                  src={ICON.CONTENTHUB.EDITSCHEDULETIME}
                  className="w-[44px] h-[44px]"
                />
                <Typography className="text-[24px] lg:text-[36px] font-inter-semibold text-secondary-main  ">
                  Edit Scheduled Time
                </Typography>
              </Box>

              <Box className={"flex gap-11  relative"}>
                <Box onClick={() => setShowCalendar(true)}>
                  <Typography className="font-inter-medium text-md mb-2">
                    {" "}
                    Date{" "}
                    <Box component={"span"} className="text-error-main">
                      *
                    </Box>
                  </Typography>
                  <Box
                    className={`h-[44px] flex items-center px-2 w-[150px] border-[1px] border-solid border-secondary-light ${
                      customDate ? "" : "text-secondary-thin"
                    } !bg-white-main rounded text-[14px] font-medium font-inter-medium text-black-main !shadow-none placeholder:text-secondary-thin hover:border-primary-main focus:border-primary-main`}
                  >
                    {customDate
                      ? `${customDate?.format("MM-DD-YYYY")}`
                      : "Select Date"}
                  </Box>
                  <CommonDatePicker
                    open={showCalendar}
                    value={customDate}
                    onChange={(date) => {
                      setCustomDate(date);
                      setShowCalendar(false);
                    }}
                    onClose={() => setShowCalendar(false)}
                  />
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
              {/* Buttons */}
              <Box className="flex flex-col gap-3 ">
                <AppButton>Save</AppButton>
                <AppButton styleType="bordered" onClick={onClose}>Cancel</AppButton>
              </Box>
            </Box>
          </Box>
        </ClickAwayListener>
      </AppModal>
    </>
  );
};

export default ScheduleTimeModal;
