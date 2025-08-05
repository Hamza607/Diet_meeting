import React from "react";
import { Box, Typography } from "@mui/material";
import { Col, Form, Row, Upload } from "antd";
import { FaPlus } from "react-icons/fa6";
import type { IStartedScreen } from "@types";
import { ICON, IMG } from "@constants";
import { AppButton, AppFormItem } from "@components";

const StartedScreen: React.FC<IStartedScreen> = ({
  fileList,
  FileListChange,
  handleNextButton,
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
            className="xl:text-5xl md:text-4xl text-2xl lg:text-left text-center text-secondary-hard mb-[1em] md:!leading-[3.25rem]"
          >
            Lets get to know you
          </Typography>
          <Box className="relative w-fit mx-auto mb-[2em]">
            {fileList.length < 1 && (
              <Box className="flex items-center justify-center w-[120px] h-[120px] rounded-full bg-primary-main">
                <Box component="img" src={ICON.ONBOARDING.USER_AVATAR} alt="" />
              </Box>
            )}
            <Upload
              listType="picture-circle"
              accept="image/*"
              maxCount={1}
              fileList={fileList}
              onChange={FileListChange}
              beforeUpload={() => false}
              className={`${
                fileList.length < 1 ? "!w-fit !h-fit" : "!w-[120px] !h-[120px]"
              }`}
            >
              <Box className="!w-[25.5px] !h-[25.5px] !bg-white-main border-[2px] border-solid border-primary-main rounded-[2px] flex items-center justify-center absolute bottom-[8px] right-[2px] z-[2]">
                <FaPlus className="text-primary-main text-base" />
              </Box>
            </Upload>
          </Box>
          <Form
            name="onboarding-profile-form"
            autoComplete="off"
            layout="vertical"
            onFieldsChange={(changedFields, allFields) => {
              console.log("changedFields", changedFields);
              console.log("allFields", allFields);
            }}
          >
            <Box className="w-full flex md:gap-8 gap-5">
              <AppFormItem
                type="input"
                name="first-name"
                label="First Name"
                placeholder="Enter First Name"
                itemClassName="w-full"
                required
                message="Please enter your first name"
              />
              <AppFormItem
                type="input"
                name="last-name"
                label="Last Name"
                placeholder="Enter Last Name"
                itemClassName="w-full"
                required
                message="Please enter your last name"
              />
            </Box>
            <AppFormItem
              type="input"
              name="display-name"
              label="Display Name*"
              placeholder="Enter Display Name"
              required
              message="Please enter your display name"
              itemClassName="mb-2"
            />
            <Typography className="text-xs text-secondary-light mb-6">
              This is the name others will see in meetings, messages, and
              comments.
            </Typography>
            <Form.Item label={null}>
              <AppButton htmlType="submit" onClick={handleNextButton}>
                Next
              </AppButton>
            </Form.Item>
          </Form>
        </Col>
        <Col
          lg={12}
          xs={24}
          className="flex items-center lg:justify-end justify-center"
        >
          <Box
            component="img"
            src={IMG.ONBOARDING.ONBOARDING_1}
            alt=""
            className="w-full max-w-[575px]"
          />
        </Col>
      </Row>
    </Box>
  );
};

export default StartedScreen;
