import React from "react";
import { Box, Typography } from "@mui/material";
import { Col, Form, Row } from "antd";
import type { IResetPasswordScreen } from "@types";
import { HAS_NUMBER_REGEX } from "@validations";
import { useAuthContext } from "@context";
import { FIREBASE_PASSWORD_ERRORS, IMG, ROUTES } from "@constants";
import { AppFormItem, AppButton, FormItemErrorMsg } from "@components";

const ResetPasswordScreen: React.FC<IResetPasswordScreen> = ({
  navigate,
  form,
  formSuccess,
  isFormValid,
  loading,
  handleFormFieldsChange,
  onSubmit,
}) => {
  const { error } = useAuthContext();
  return (
    <Row>
      <Col xl={11} xs={24} className="flex justify-center">
        <Box>
          <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl">
            Reset Your Password
          </Typography>
          <Typography
            variant="h6"
            className="text-secondary-light lg:text-xl sm:text-lg text-xs mt-[3em] mb-[1.5em]"
          >
            {formSuccess
              ? "Your password has been successfully reset. Please log in with your new password"
              : "Please create a new password for your account."}
          </Typography>
          {formSuccess ? (
            <AppButton htmlType="submit" onClick={() => navigate(ROUTES.LOGIN)}>
              Back to Login
            </AppButton>
          ) : (
            <Form
              form={form}
              name="reset-password-form"
              autoComplete="off"
              layout="vertical"
              onFieldsChange={handleFormFieldsChange}
              onFinish={onSubmit}
            >
              <AppFormItem
                type="password"
                name="password"
                label="New Password"
                placeholder="Minimum 8 characters include 1 number"
                message="Please enter your new password"
                required
                validator={(value) => {
                  if (value.length < 8) {
                    return Promise.reject(
                      <FormItemErrorMsg message="Minimum 8 characters" />
                    );
                  }
                  if (!HAS_NUMBER_REGEX.test(value)) {
                    return Promise.reject(
                      <FormItemErrorMsg message="At least 1 number" />
                    );
                  }

                  return Promise.resolve();
                }}
              />
              <AppFormItem
                type="password"
                name="confirm-password"
                label="Confirm New Password"
                placeholder="Minimum 8 characters include 1 number"
                message="Please confirm your new password"
                required
                validator={(value) => {
                  if (value !== form.getFieldValue("password")) {
                    return Promise.reject(
                      <FormItemErrorMsg message="Passwords does not match" />
                    );
                  }
                  return Promise.resolve();
                }}
              />
              <Form.Item label={null} className="mt-[1.5em]">
                <AppButton
                  htmlType={
                    !FIREBASE_PASSWORD_ERRORS.includes(error)
                      ? "submit"
                      : "button"
                  }
                  styleType={
                    isFormValid && !FIREBASE_PASSWORD_ERRORS.includes(error)
                      ? "primary"
                      : "disabled"
                  }
                  loading={loading}
                >
                  Reset Password
                </AppButton>
              </Form.Item>
            </Form>
          )}
        </Box>
      </Col>
      <Col xl={13} xs={24} className="xl:text-end text-center xl:mt-0 mt-10">
        <Box
          component="img"
          src={IMG.AUTH.PASSWORD_CONTAINER_IMG}
          alt=""
          className="w-full max-w-[550px]"
        />
      </Col>
    </Row>
  );
};

export default ResetPasswordScreen;
