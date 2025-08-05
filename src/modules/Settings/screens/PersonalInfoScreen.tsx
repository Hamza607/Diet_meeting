import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { Button, Form, Upload } from "antd";
import { FaPlus } from "react-icons/fa6";
import type { IPersonalInfoScreen } from "@types";
import {
  AGE_OPTIONS,
  GENDER_OPTIONS,
  ICON,
  RESTRICTION_CARDS_DATA,
} from "@constants";
import { AppButton, AppFormItem } from "@components";

const PersonalInfoScreen: React.FC<IPersonalInfoScreen> = ({
  fileList,
  interested,
  FileListChange,
  handleInterested,
}) => {
  return (
    <Fragment>
      
        <Box className="w-full max-w-[549px]">
          <Form
            name="personal-info-form"
            autoComplete="off"
            layout="vertical"
            onFieldsChange={(changedFields, allFields) => {
              console.log("changedFields", changedFields);
              console.log("allFields", allFields);
            }}
            initialValues={{
              "first-name": "John",
              "last-name": "Doe",
              "display-name": "John Doe",
              gender: "male",
              age: "18-24",
            }}
          >
            <Box className="relative w-fit mx-auto mb-[2em]">
              {fileList.length < 1 && (
                <Box className="flex items-center justify-center w-[120px] h-[120px] rounded-full bg-primary-main">
                  <Box
                    component="img"
                    src={ICON.ONBOARDING.USER_AVATAR}
                    alt=""
                  />
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
                  fileList.length < 1
                    ? "!w-fit !h-fit"
                    : "!w-[120px] !h-[120px]"
                }`}
              >
                <Box className="!w-[25.5px] !h-[25.5px] !bg-white-main border-[2px] border-solid border-primary-main rounded-[2px] flex items-center justify-center absolute bottom-[8px] right-[2px] z-[2]">
                  <FaPlus className="text-primary-main text-sm" />
                </Box>
              </Upload>
            </Box>
            <Box className="w-full md:flex md:gap-8">
              <AppFormItem
                type="input"
                name="first-name"
                label="First Name"
                placeholder="Enter First Name"
                itemClassName="w-full"
                inputClassName="!bg-white-strong"
                required
                message="Please enter your first name"
              />
              <AppFormItem
                type="input"
                name="last-name"
                label="Last Name"
                placeholder="Enter Last Name"
                itemClassName="w-full"
                inputClassName="!bg-white-strong"
                required
                message="Please enter your last name"
              />
            </Box>
            <AppFormItem
              type="input"
              name="display-name"
              label="Display Name*"
              placeholder="Enter Display Name"
              itemClassName="w-full mb-2"
              inputClassName="!bg-white-strong"
              required
              message="Please enter your display name"
            />
            <Typography className="text-xs text-secondary-light mb-4">
              This is the name others will see in meetings, messages, and
              comments.
            </Typography>
            <Box className="w-full flex md:gap-8 gap-5">
              <AppFormItem
                type="select"
                name="gender"
                label="Gender"
                placeholder="Enter Gender"
                selectOptions={GENDER_OPTIONS}
                itemClassName="w-full"
                inputClassName="!bg-white-strong"
                required
                message="Please enter your gender"
              />
              <AppFormItem
                type="select"
                name="age"
                label="Age"
                placeholder="Enter Age"
                selectOptions={AGE_OPTIONS}
                itemClassName="w-full"
                inputClassName="!bg-white-strong"
                required
                message="Please enter your age"
              />
            </Box>
            <AppFormItem type="others" name="interested" label="Interested In">
              <Box className="w-full flex flex-wrap sm:gap-4 gap-3">
                {RESTRICTION_CARDS_DATA.filter(
                  (item) => item.title !== "Low-Sugar"
                ).map((item, index) => {
                  const { title } = item;
                  return (
                    <Button
                      key={index}
                      className={`w-fit h-fit py-[0.25rem] md:px-[1rem] px-[0.75rem] md:text-base text-sm font-inter-medium font-medium !border-none !shadow-none rounded-lg ${
                        interested.includes(title)
                          ? "!bg-primary-main !text-white-main"
                          : "!bg-white-light !text-primary-main"
                      }`}
                      onClick={() => handleInterested(title)}
                    >
                      {title}
                    </Button>
                  );
                })}
              </Box>
            </AppFormItem>
            <Form.Item name="submit" label={null}>
              <AppButton htmlType="submit" styleType="primary">
                Update
              </AppButton>
            </Form.Item>
          </Form>
        </Box>
    </Fragment>
  );
};

export default PersonalInfoScreen;
