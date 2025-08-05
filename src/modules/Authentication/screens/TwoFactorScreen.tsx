import React from "react";
import { Box, Typography } from "@mui/material";
import { Row, Col, Form } from "antd";
import type { ITwoFactorScreen } from "@types";
import { useAuthContext } from "@context";
import { FIREBASE_ERROR, FIREBASE_PHONE_ERRORS, IMG } from "@constants";
import { throwFirebaseException } from "@utils";
import { AppFormItem, AppButton, FormItemErrorMsg } from "@components";

const TwoFactorScreen: React.FC<ITwoFactorScreen> = ({
  form,
  loading,
  skipLoading,
  isFormValid,
  formInitialValues,
  handleFormFieldsChange,
  onSubmit,
  handleSkipClick,
}) => {
  const { error, setError } = useAuthContext();
  return (
    <Row>
      <Col lg={11} xs={24} className="flex justify-center">
        <Box>
          <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl">
            Enable Two-Factor Authentication
          </Typography>
          <Typography
            variant="h6"
            className="text-secondary-light lg:text-xl sm:text-lg text-xs my-[1.5em]"
          >
            Enter your phone number to set up Two-Factor Authentication
          </Typography>
          <Form
            form={form}
            name="enable-2FA-form"
            autoComplete="off"
            layout="vertical"
            initialValues={formInitialValues}
            onFieldsChange={handleFormFieldsChange}
            onFinish={onSubmit}
          >
            <AppFormItem
              type="phone"
              name="phone"
              label="Phone Number"
              placeholder="(000) 000-0000 (Optional)"
              message="Please enter your phone number"
              required
              validateStatus={
                FIREBASE_PHONE_ERRORS.includes(error) ? "error" : ""
              }
              help={
                FIREBASE_PHONE_ERRORS.includes(error) ? (
                  <FormItemErrorMsg
                    message={
                      error === FIREBASE_ERROR.AUTH_TO_MANY_REQUEST
                        ? "Please try different phone number or try again later"
                        : throwFirebaseException(error)
                    }
                  />
                ) : null
              }
              onPhoneChange={() => {
                if (FIREBASE_PHONE_ERRORS.includes(error)) {
                  setError("");
                }
              }}
            />
            <Form.Item label={null} className="mt-4">
              <AppButton
                htmlType={
                  !FIREBASE_PHONE_ERRORS.includes(error) ? "submit" : "button"
                }
                styleType={isFormValid ? "primary" : "disabled"}
                loading={loading}
                disabled={skipLoading}
              >
                Enable 2FA
              </AppButton>
            </Form.Item>
            <Form.Item label={null}>
              <AppButton
                styleType="text"
                loading={skipLoading}
                disabled={loading}
                onClick={handleSkipClick}
              >
                Skip
              </AppButton>
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

export default TwoFactorScreen;
