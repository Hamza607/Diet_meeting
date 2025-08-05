import React from "react";
import { Box, Typography } from "@mui/material";
import { Row, Col, Form } from "antd";
import type { IForgotPasswordScreen } from "@types";
import { FIREBASE_EMAIL_ERRORS, ICON, IMG } from "@constants";
import { AppFormItem, AppButton, FormItemErrorMsg } from "@components";
import { useAuthContext } from "@context";
import { throwFirebaseException } from "@utils";

const ForgotPasswordScreen: React.FC<IForgotPasswordScreen> = ({
  form,
  formSuccess,
  resetLink,
  isFormValid,
  loading,
  handleFormFieldsChange,
  handleResetLink,
  onSubmit,
}) => {
  const { error, setError } = useAuthContext();
  return (
    <Row>
      <Col lg={11} xs={24} className="flex justify-center">
        <Box>
          <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl">
            Forgot Password?
          </Typography>
          {!resetLink && formSuccess && (
            <Box className="w-[90px] h-[90px] rounded-full bg-primary-main flex justify-center items-center mt-[2.5em] mb-[1em] mx-auto">
              <Box component="img" src={ICON.AUTH.EMAIL_ICON} alt="" />
            </Box>
          )}
          <Typography
            variant="h6"
            className={`text-secondary-light lg:text-xl sm:text-lg text-xs ${
              !formSuccess ? "my-[2em]" : ""
            } ${resetLink ? "mt-[2.5em] mb-[1em]" : ""}`}
          >
            {formSuccess && resetLink
              ? "This link has expired. Please request a new one"
              : formSuccess && !resetLink
              ? "You will receive a password reset link shortly."
              : "Enter your registered email address or phone number to receive a password reset link."}
          </Typography>
          {formSuccess && resetLink && (
            <AppButton onClick={handleResetLink}>Request new Link</AppButton>
          )}
          {!formSuccess && (
            <Form
              form={form}
              name="forgot-password-form"
              autoComplete="off"
              layout="vertical"
              onFieldsChange={handleFormFieldsChange}
              onFinish={onSubmit}
            >
              <AppFormItem
                type="input"
                name="email"
                label="Email Address or Phone Number"
                placeholder="Email Address or Phone Number"
                message="Please enter your email"
                required
                validateStatus={
                  FIREBASE_EMAIL_ERRORS.includes(error) ? "error" : ""
                }
                help={
                  FIREBASE_EMAIL_ERRORS.includes(error) ? (
                    <FormItemErrorMsg message={throwFirebaseException(error)} />
                  ) : null
                }
                onInputChange={() => {
                  if (FIREBASE_EMAIL_ERRORS.includes(error)) {
                    setError("");
                  }
                }}
              />
              <Form.Item label={null} className="mt-4">
                <AppButton
                  htmlType={
                    !FIREBASE_EMAIL_ERRORS.includes(error) ? "submit" : "button"
                  }
                  styleType={isFormValid ? "primary" : "disabled"}
                  loading={loading}
                >
                  Submit
                </AppButton>
              </Form.Item>
            </Form>
          )}
        </Box>
      </Col>
      <Col lg={13} xs={24} className="xl:text-end text-center xl:mt-0 mt-10">
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

export default ForgotPasswordScreen;
