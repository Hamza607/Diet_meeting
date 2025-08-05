import React from "react";
import { Box, Typography } from "@mui/material";
import type { ISubscriptionScreen } from "@types";
import { Col, Row } from "antd";
import { ICON, ROUTES } from "@constants";
import { AppButton } from "@components";

const SubscriptionScreen: React.FC<ISubscriptionScreen> = ({
  navigate,
  userRole,
  handleUserRoleChange,
  handleBackButton,
}) => {
  return (
    <Box className="w-full max-w-[1150px] h-auto min-h-[calc(100vh-79px)] mx-auto px-[1em] py-[3em] flex flex-col justify-center">
      <Typography
        variant="h1"
        className="xl:text-5xl md:text-4xl sm:text-2xl text-xl text-secondary-hard mb-[2em] md:!leading-[3.25rem]"
      >
        Choose the right path for you
      </Typography>
      <Row gutter={[30, { md: 0, sm: 30, xs: 30 }]}>
        <Col md={12} xs={24}>
          <Box
            className={`w-full h-full rounded-3xl py-[1.875em] px-[1em] text-center cursor-pointer bg-white-main border-[1px] border-solid ${
              userRole === "member"
                ? "border-primary-main"
                : "border-white-main"
            }`}
            onClick={() => handleUserRoleChange("member")}
          >
            <Box
              className={`w-[64px] h-[64px] rounded-full flex items-center justify-center mx-auto ${
                userRole === "member" ? "bg-primary-main" : "bg-white-light"
              }`}
            >
              <Box
                component="img"
                src={ICON.ONBOARDING.MEMBER_ICON}
                alt=""
                className={
                  userRole === "member"
                    ? "brightness-0 invert sepia-100 saturate-0 hue-rotate-288 brightness-102 contrast-102"
                    : ""
                }
              />
            </Box>
            <Box className="w-auto max-w-[340px] mx-auto mt-[1em] mb-[3em]">
              <Typography className="text-xl font-poppins-bold font-bold text-secondary-main mb-2">
                Member
              </Typography>
              <Typography className="text-sm text-secondary-light">
                Join and host live meetings, connect with others, and be part of
                a supportive community.
              </Typography>
            </Box>
            <Box className="flex items-baseline justify-center gap-[1.5em]">
              <Typography className="text-secondary-light line-through">
                $29.00
              </Typography>
              <Typography className="text-[2em] font-poppins-bold font-bold text-primary-main">
                Free
              </Typography>
            </Box>
          </Box>
        </Col>
        <Col md={12} xs={24}>
          <Box
            className={`w-full h-full rounded-3xl py-[1.875em] px-[1em] text-center cursor-pointer bg-white-main border-[1px] border-solid ${
              userRole === "coach" ? "border-primary-main" : "border-white-main"
            }`}
            onClick={() => handleUserRoleChange("coach")}
          >
            <Box
              className={`w-[64px] h-[64px] rounded-full flex items-center justify-center mx-auto ${
                userRole === "coach" ? "bg-primary-main" : "bg-white-light"
              }`}
            >
              <Box
                component="img"
                src={ICON.ONBOARDING.COACH_ICON}
                alt=""
                className={
                  userRole === "coach"
                    ? "brightness-0 invert sepia-100 saturate-0 hue-rotate-288 brightness-102 contrast-102"
                    : ""
                }
              />
            </Box>
            <Box className="w-auto max-w-[450px] mx-auto mt-[1em] mb-[3em]">
              <Typography className="text-xl font-poppins-bold font-bold text-secondary-main mb-2">
                Coach
              </Typography>
              <Typography className="text-sm text-secondary-light">
                Upload content, host and schedule meetings, and share your
                experiences, your brand or products to help others.
              </Typography>
            </Box>
            <Box>
              <Typography className="text-[2em] font-poppins-medium font-medium text-primary-main">
                XX.XX/ month
              </Typography>
              <Typography className="text-[0.625rem] text-secondary-thin">
                Charges monthly
              </Typography>
            </Box>
          </Box>
        </Col>
      </Row>
      <Box className="w-full max-w-[549px] mx-auto mt-[3em]">
        <AppButton onClick={() => navigate(ROUTES.DASHBOARD)}>
          Continue as a {userRole === "member" ? "Member" : "Coach"}
        </AppButton>
        <AppButton
          styleType="bordered"
          className="mt-5"
          onClick={handleBackButton}
        >
          Back
        </AppButton>
      </Box>
    </Box>
  );
};

export default SubscriptionScreen;
