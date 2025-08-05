import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { Button, Col, Dropdown, Input, Row } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import type { IGoalScreen } from "@types";
import { GOAL_DURATION_OPTIONS, IMG, WEIGHT__UNITS } from "@constants";
import { AppButton } from "@components";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const GoalScreen: React.FC<IGoalScreen> = ({
  goalWeight,
  goalDuration,
  customDate,
  datePickerAnchor,
  setDatePickerAnchor,
  handleCustomDateSelect,
  handleCustomButtonClick,
  handleGoalDurationChange,
  handleWeightUnitChange,
  handleNextButton,
  handleBackButton,
  handleSkipButton,
}) => {
  return (
    <Box className="w-full h-auto min-h-[calc(100vh-165px)] max-w-[1300px] mx-auto xl:pl-[5em] px-[1em] py-[3em]">
      <Row
        gutter={[
          { xl: 60, lg: 40 },
          { lg: 0, md: 40, sm: 40, xs: 40 },
        ]}
      >
        <Col lg={12} xs={24}>
          <Typography
            variant="h1"
            className="xl:text-5xl md:text-4xl text-2xl lg:text-left text-center text-secondary-hard mb-[.875em] md:!leading-[3.25rem]"
          >
            Set Your Weight Goals
          </Typography>
          <Typography className="sm:text-xl text-base font-inter-semibold font-semibold text-secondary-light">
            What's your
            {"  "}
            <Box component="span" className="text-primary-main">
              goal weight
            </Box>
            ?
          </Typography>
          <Box className="flex items-center gap-4 my-6">
            <Input
              className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium text-secondary-main hover:!border-primary-main focus:!border-primary-main placeholder:text-secondary-thin"
              placeholder="0"
              maxLength={4}
            />
            <Dropdown
              menu={{ items: WEIGHT__UNITS, onClick: handleWeightUnitChange }}
              trigger={["click"]}
            >
              <Button
                onClick={(e) => e.preventDefault()}
                className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium !text-secondary-main hover:!border-primary-main focus:!border-primary-main"
              >
                {goalWeight}
                {"  "}
                <ArrowBackIosNewIcon className="text-base text-secondary-thin -rotate-90" />
              </Button>
            </Dropdown>
          </Box>
          <Typography className="sm:text-xl text-base font-inter-semibold font-semibold text-secondary-light">
            When would you like to
            {"  "}
            <Box component="span" className="text-primary-main">
              achieve your goals
            </Box>
            ?
          </Typography>
          <Box className="flex flex-wrap gap-6 my-6">
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
                        } h-[48px] py-1 px-3 bg-white-main border-white-main rounded-lg text-sm font-inter-medium font-medium !text-primary-main !shadow-none transition-all duration-300 ease-linear hover:!border-primary-main ${
                          goalDuration === "custom" && customDate
                            ? "!bg-primary-main !border-primary-main !text-white-main"
                            : ""
                        }`}
                        onClick={handleCustomButtonClick}
                      >
                        {customDate
                          ? customDate.format("MMMM D YYYY")
                          : "Custom"}
                      </Button>
                    </LocalizationProvider>
                  ) : (
                    <Button
                      key={index}
                      className={`w-[128px] h-[48px] py-1 px-3 bg-white-main border-white-main rounded-lg text-sm font-inter-medium font-medium !text-primary-main !shadow-none hover:!border-primary-main ${
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
          <AppButton onClick={handleNextButton}>Next</AppButton>
          <AppButton
            styleType="bordered"
            className="my-5"
            onClick={handleBackButton}
          >
            Back
          </AppButton>
          <AppButton styleType="text" onClick={handleSkipButton}>
            Skip
          </AppButton>
        </Col>
        <Col
          lg={12}
          xs={24}
          className="flex items-center lg:justify-end justify-center"
        >
          <Box
            component="img"
            src={IMG.ONBOARDING.ONBOARDING_8}
            alt=""
            className="w-full max-w-[575px]"
          />
        </Col>
      </Row>
    </Box>
  );
};

export default GoalScreen;
