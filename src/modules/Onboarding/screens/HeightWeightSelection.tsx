import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { Button, Col, Dropdown, Input, Row } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import type { IHeightWeightSelection } from "@types";
import { HEIGHT__UNITS, IMG, WEIGHT__UNITS } from "@constants";
import { AppButton } from "@components";

const HeightWeightSelection: React.FC<IHeightWeightSelection> = ({
  feet,
  inches,
  heightUnit,
  weightUnit,
  handleFeetChange,
  handleInchesChange,
  handleHeightUnitChange,
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
            Lets get to know you
          </Typography>
          <Typography className="sm:text-xl text-base font-inter-semibold font-semibold text-secondary-light">
            What’s your
            {"  "}
            <Box component="span" className="text-primary-main">
              height
            </Box>
            ?
          </Typography>
          <Box className="flex items-center gap-4 my-6">
            {heightUnit === "cm" ? (
              <Input
                className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium text-secondary-main hover:!border-primary-main focus:!border-primary-main placeholder:text-secondary-thin"
                placeholder="0"
                maxLength={4}
              />
            ) : (
              <Fragment>
                <Input
                  value={feet}
                  onChange={handleFeetChange}
                  className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium text-secondary-main hover:!border-primary-main focus:!border-primary-main placeholder:text-secondary-thin weight-input"
                  placeholder="0"
                  maxLength={4}
                  suffix="ft"
                />
                <Input
                  value={inches}
                  onChange={handleInchesChange}
                  className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium text-secondary-main hover:!border-primary-main focus:!border-primary-main placeholder:text-secondary-thin weight-input"
                  placeholder="0"
                  maxLength={4}
                  suffix="in"
                />
              </Fragment>
            )}
            <Dropdown
              menu={{ items: HEIGHT__UNITS, onClick: handleHeightUnitChange }}
              trigger={["click"]}
            >
              <Button
                onClick={(e) => e.preventDefault()}
                className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium !text-secondary-main hover:!border-primary-main focus:!border-primary-main"
              >
                {heightUnit}
                {"  "}
                <ArrowBackIosNewIcon className="text-base text-secondary-thin -rotate-90" />
              </Button>
            </Dropdown>
          </Box>
          <Typography className="sm:text-xl text-base font-inter-semibold font-semibold text-secondary-light">
            What’s your
            {"  "}
            <Box component="span" className="text-primary-main">
              current weight
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
                {weightUnit}
                {"  "}
                <ArrowBackIosNewIcon className="text-base text-secondary-thin -rotate-90" />
              </Button>
            </Dropdown>
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
            src={IMG.ONBOARDING.ONBOARDING_7}
            alt=""
            className="w-full max-w-[575px]"
          />
        </Col>
      </Row>
    </Box>
  );
};

export default HeightWeightSelection;
