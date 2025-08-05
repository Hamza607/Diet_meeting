import React from "react";
import { Box, Typography } from "@mui/material";
import { Row, Col, Form } from "antd";
import type { IOtpVerificationScreen } from "@types";
import { useAuthContext } from "@context";
import { FIREBASE_PHONE_ERRORS, IMG } from "@constants";
import { throwFirebaseException } from "@utils";
import { AppFormItem, AppButton, FormItemErrorMsg } from "@components";

const OtpVerificationScreen: React.FC<IOtpVerificationScreen> = ({
  form,
  isFormValid,
  loading,
  resendLoading,
  handleFormFieldsChange,
  onSubmit,
  onResendOtp,
  loginVerification,
  handleSendCode,
}) => {
  const { error, setError, countdown, currentUserData } = useAuthContext();
  return (
    <Row>
      <Col lg={11} xs={24} className="flex justify-center">
        <Box>
          <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl">
            Two-Factor Authentication
          </Typography>
          <Typography
            variant="h6"
            className="text-secondary-light lg:text-xl sm:text-lg text-xs my-[1.5em]"
          >
            Enter the 6 digit code sent to phone number ending with{"  "}
            {currentUserData?.phone?.slice(-4)}
          </Typography>
          <Form
            form={form}
            name="otp-verification-form"
            autoComplete="off"
            layout="vertical"
            onFieldsChange={handleFormFieldsChange}
            onFinish={onSubmit}
          >
            <Box className="relative">
              <AppFormItem
                type="code"
                name="code"
                readOnly={loginVerification}
                required={!loginVerification}
                message="Please enter the 6 digit code"
                inputClassName={
                  FIREBASE_PHONE_ERRORS.includes(error)
                    ? "!border-error-main !text-error-main"
                    : ""
                }
                onVerificationChange={(value) => {
                  if (value.length < 6) {
                    setError("");
                  }
                }}
              />
              {FIREBASE_PHONE_ERRORS.includes(error) && (
                <Box className="absolute -bottom-5 left-0">
                  <FormItemErrorMsg message={throwFirebaseException(error)} />
                </Box>
              )}
            </Box>
            <Form.Item label={null} className="mt-4">
              {loginVerification ? (
                <AppButton
                  styleType="primary"
                  loading={loading}
                  onClick={handleSendCode}
                >
                  Send Code
                </AppButton>
              ) : (
                <AppButton
                  htmlType={isFormValid ? "submit" : "button"}
                  styleType={
                    isFormValid && !FIREBASE_PHONE_ERRORS.includes(error)
                      ? "primary"
                      : "disabled"
                  }
                  loading={loading}
                  disabled={resendLoading}
                >
                  Verify
                </AppButton>
              )}
            </Form.Item>
            <Form.Item label={null}>
              {!loginVerification && (
                <AppButton
                  styleType={"text"}
                  loading={resendLoading}
                  disabled={loading || countdown > 0}
                  onClick={onResendOtp}
                  className={
                    countdown > 0
                      ? "cursor-not-allowed !text-secondary-light"
                      : ""
                  }
                >
                  {countdown > 0
                    ? `Resend Code in ${countdown}s`
                    : "Resend Code"}
                </AppButton>
              )}
            </Form.Item>
          </Form>
        </Box>
      </Col>
      <Col lg={13} xs={24} className="xl:text-end text-center xl:mt-0 mt-10">
        <Box
          component="img"
          src={IMG.AUTH.TWO_FACTOR_CONTAINER_IMG}
          alt=""
          className="w-full max-w-[550px]"
        />
      </Col>
    </Row>
  );
};

export default OtpVerificationScreen;
