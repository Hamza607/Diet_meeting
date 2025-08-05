import React from "react";
import { Box, Typography } from "@mui/material";
import { Col, Row } from "antd";
import type { IInfoScreen2 } from "@types";
import { IMG } from "@constants";
import { AppButton } from "@components";

const InfoScreen2: React.FC<IInfoScreen2> = ({ handleNextButton }) => {
  return (
    <Box className="w-full h-auto min-h-[calc(100vh-165px)] max-w-[1300px] mx-auto xl:pl-[5em] px-[1em] lg:pt-[8.5em] pt-[5em] pb-[3em]">
      <Row
        gutter={[
          { xl: 60, lg: 40 },
          { lg: 0, md: 40, sm: 40, xs: 40 },
        ]}
      >
        <Col lg={12} xs={24}>
          <Typography
            variant="h1"
            className="xl:text-[40px] md:text-4xl text-2xl lg:text-left text-center text-secondary-hard mb-[1em] md:!leading-[3.25rem]"
          >
            Even small changes—like drinking one more glass of water—can lead to
            big results.
          </Typography>
          <Typography className="sm:text-xl text-base lg:text-left text-center font-poppins-bold font-bold text-secondary-light sm:my-[3em] my-[2em]">
            Sustainable progress starts with habits that feel achievable.
          </Typography>
          <AppButton onClick={handleNextButton}>Ready for more</AppButton>
        </Col>
        <Col
          lg={12}
          xs={24}
          className="flex items-center lg:justify-end justify-center"
        >
          <Box
            component="img"
            src={IMG.ONBOARDING.ONBOARDING_4}
            alt=""
            className="w-full max-w-[575px]"
          />
        </Col>
      </Row>
    </Box>
  );
};

export default InfoScreen2;
