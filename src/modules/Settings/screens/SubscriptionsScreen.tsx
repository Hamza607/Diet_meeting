import React from "react";
import { Box, Typography } from "@mui/material";
import { Col, Row } from "antd";
import type { ISubscriptionsScreen } from "@types";
import { ICON } from "@constants";
import { AppButton } from "@components";

const SubscriptionsScreen: React.FC<ISubscriptionsScreen> = ({
  userRole,
  handleChangeMembershipModalOpen,
  handleCancelMembershipModalOpen,
}) => {
  return (
    <Box className="lg:pr-2">
      <Row
        gutter={[
          { xl: 30, lg: 16 },
          { lg: 0, md: 24, sm: 24, xs: 24 },
        ]}
      >
        <Col lg={12} xs={24}>
          <Box
            className={`w-full h-full rounded-3xl py-[1.875em] px-[1em] text-center cursor-pointer bg-white-main border-[1px] border-solid basic-shadow ${
              userRole === "member"
                ? "border-primary-main"
                : "border-white-main"
            }`}
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
            <Box className="w-auto max-w-[340px] mx-auto mt-[1em]">
              <Typography className="text-lg font-inter-semibold font-semibold text-secondary-main mb-2">
                Member
              </Typography>
              <Typography className="text-xs text-secondary-light">
                Join and host live meetings, connect with others, and be part of
                a supportive community.
              </Typography>
            </Box>
            <Box className="flex items-baseline justify-center gap-[1.5em] my-[3em]">
              <Typography className="text-secondary-light line-through">
                $29.00
              </Typography>
              <Typography className="text-[2rem] font-inter-semibold font-semibold text-primary-main">
                Free
              </Typography>
            </Box>
            <AppButton
              styleType={userRole === "member" ? "bordered" : "primary"}
            >
              {userRole === "member" ? "Cancel" : "Change"} Membership
            </AppButton>
          </Box>
        </Col>
        <Col lg={12} xs={24}>
          <Box
            className={`w-full h-full rounded-3xl py-[1.875em] px-[1em] text-center cursor-pointer bg-white-main border-[1px] border-solid basic-shadow ${
              userRole === "coach" ? "border-primary-main" : "border-white-main"
            }`}
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
            <Box className="w-auto max-w-[340px] mx-auto mt-[1em]">
              <Typography className="text-xl font-inter-semibold font-semibold text-secondary-main mb-2">
                Coach
              </Typography>
              <Typography className="text-xs text-secondary-light">
                Upload content, host and schedule meetings, and share your
                experiences, your brand or products to help others.
              </Typography>
            </Box>
            <Box className="my-[3em]">
              <Typography className="text-[2rem] font-inter-semibold font-semibold text-primary-main">
                XX.XX/ month
              </Typography>
            </Box>
            <AppButton
              styleType={userRole === "coach" ? "bordered" : "primary"}
              onClick={
                userRole === "coach"
                  ? handleCancelMembershipModalOpen
                  : handleChangeMembershipModalOpen
              }
            >
              {userRole === "coach" ? "Cancel" : "Change"} Membership
            </AppButton>
          </Box>
        </Col>
      </Row>
    </Box>
  );
};

export default SubscriptionsScreen;
