import React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Col, Row } from "antd";
import type { IGenderSelectionScreen } from "@types";
import { IMG } from "@constants";
import { AppButton } from "@components";

const GenderSelection: React.FC<IGenderSelectionScreen> = ({
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
          <Box>
            <Typography className="sm:text-xl text-lg font-poppins-bold font-bold mb-2">
              What sex were you assigned at birth?
            </Typography>
            <Typography className="text-sm text-secondary-light">
              This helps us tailor content recommendations to better match your
              health needs.
            </Typography>
            <RadioGroup name="age-buttons-group" className="my-5 w-fit">
              <FormControlLabel
                value="female"
                className="mb-[1em] mr-0"
                control={
                  <Radio className="text-primary-main &.Mui-checked:text-primary-main &.Mui-checked:font-size-[22px]" />
                }
                label={<Typography>Female</Typography>}
              />
              <FormControlLabel
                value="male"
                className="mb-[1em] mr-0"
                control={
                  <Radio className="text-primary-main &.Mui-checked:text-primary-main &.Mui-checked:font-size-[22px]" />
                }
                label={<Typography>Male</Typography>}
              />
            </RadioGroup>
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
          </Box>
        </Col>
        <Col
          lg={12}
          xs={24}
          className="flex items-center lg:justify-end justify-center"
        >
          <Box
            component="img"
            src={IMG.ONBOARDING.ONBOARDING_5}
            alt=""
            className="w-full max-w-[575px]"
          />
        </Col>
      </Row>
    </Box>
  );
};

export default GenderSelection;
