import React, { Fragment } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Dropdown, Input } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import type { IGoalModal } from "@types";
import { GOAL_DURATION_OPTIONS, ICON, WEIGHT__UNITS } from "@constants";
import { AppButton, AppModal } from "@components";

const GoalModal: React.FC<IGoalModal> = ({
  open,
  onClose,
  goalUnit,
  handleGoalUnitChange,
  goalDuration,
  customDate,
  datePickerAnchor,
  setDatePickerAnchor,
  handleCustomDateSelect,
  handleCustomButtonClick,
  handleGoalDurationChange,
}) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[549px] rounded-[12px] sm:py-[2.875rem] sm:px-[2.25rem] p-[1.25rem]"
    >
      <Box>
        <Box className="flex justify-end w-full mr-0 lg:mr-16">
          <IconButton onClick={onClose}>
            <Box component="img" src={ICON.DASHBOARD.MODALCLOSE} alt="" />
          </IconButton>
        </Box>
        <Typography variant="h3">Edit Start Current Weight</Typography>
        <Typography className="sm:text-xl text-base font-inter-semibold font-semibold text-secondary-light mb-[1em] mt-[2em]">
          What’s your{" "}
          <Box component="span" className="text-primary-main">
            start weight?
          </Box>
        </Typography>
        <Box className="flex items-center gap-4 mb-[2em]">
          <Input
            className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium text-secondary-main hover:!border-primary-main focus:!border-primary-main placeholder:text-secondary-thin"
            placeholder="0"
            maxLength={4}
          />
          <Dropdown
            menu={{ items: WEIGHT__UNITS, onClick: handleGoalUnitChange }}
            trigger={["click"]}
          >
            <Button
              onClick={(e) => e.preventDefault()}
              className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium !text-secondary-main hover:!border-primary-main focus:!border-primary-main"
            >
              {goalUnit}
              {"  "}
              <ArrowBackIosNewIcon className="text-base text-secondary-thin -rotate-90" />
            </Button>
          </Dropdown>
        </Box>
        <Typography className="sm:text-xl text-base font-inter-semibold font-semibold text-secondary-light mb-[1em]">
          When would you like to
          {"  "}
          <Box component="span" className="text-primary-main">
            achieve your goals
          </Box>
          ?
        </Typography>
        <Box className="flex flex-wrap gap-6 mb-[2em]">
          {GOAL_DURATION_OPTIONS.map((option, index) => {
            const { label } = option;
            return (
              <Fragment>
                {label === "Custom" ? (
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
                    <Button
                      className={`${
                        customDate ? "w-[200px]" : "w-[128px]"
                      } h-[48px] py-1 px-3 bg-white-light border-white-light rounded-lg text-sm font-inter-medium font-medium !text-primary-main !shadow-none transition-all duration-300 ease-linear hover:!border-primary-main ${
                        goalDuration === "custom" && customDate
                          ? "!bg-primary-main !border-primary-main !text-white-main"
                          : ""
                      }`}
                      onClick={handleCustomButtonClick}
                    >
                      {customDate ? customDate.format("MMMM D YYYY") : "Custom"}
                    </Button>
                  </LocalizationProvider>
                ) : (
                  <Button
                    key={index}
                    className={`w-[128px] h-[48px] py-1 px-3 bg-white-light border-white-light rounded-lg text-sm font-inter-medium font-medium !text-primary-main !shadow-none hover:!border-primary-main ${
                      goalDuration === label
                        ? "!bg-primary-main !border-primary-main !text-white-main"
                        : ""
                    }`}
                    onClick={() => handleGoalDurationChange(label)}
                  >
                    {label}
                  </Button>
                )}
              </Fragment>
            );
          })}
        </Box>
        <Box className="flex flex-col gap-4">
          <AppButton styleType="primary" onClick={onClose}>
            Save
          </AppButton>
          <AppButton styleType="bordered" onClick={onClose}>
            Cancel
          </AppButton>
        </Box>
      </Box>
    </AppModal>
  );
};

export default GoalModal;
