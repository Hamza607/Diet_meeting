import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Col, Form, Row } from "antd";
import type { ILoginScreen } from "@types";
import { useAuthContext } from "@context";
import {
  FIREBASE_EMAIL_ERRORS,
  FIREBASE_ERROR,
  FIREBASE_PASSWORD_ERRORS,
  IMG,
  ROUTES,
} from "@constants";
import { throwFirebaseException } from "@utils";
import { AppFormItem, AppButton, FormItemErrorMsg } from "@components";

const LoginScreen: React.FC<ILoginScreen> = ({
  form,
  isFormValid,
  loading,
  handleFormFieldsChange,
  onSubmit,
}) => {
  const { error, setError } = useAuthContext();
  return (
    <Row>
      <Col xl={11} xs={24} className="flex justify-center">
        <Box>
          <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl">
            Welcome Back
          </Typography>
          <Typography
            variant="h6"
            className="text-secondary-light lg:text-xl sm:text-lg text-xs mt-[1em] mb-[2em]"
          >
            Log in to your account to join live meetings, track your progress,
            and connect with the community.
          </Typography>
          <Form
            form={form}
            name="login-form"
            autoComplete="off"
            layout="vertical"
            onFieldsChange={handleFormFieldsChange}
            onFinish={onSubmit}
          >
            <AppFormItem
              type="input"
              name="email"
              label="Email Address"
              placeholder="Enter Email Address"
              message="Please enter your email"
              required
              validateStatus={
                FIREBASE_EMAIL_ERRORS.includes(error) ? "error" : ""
              }
              help={
                FIREBASE_EMAIL_ERRORS.includes(error) ? (
                  <FormItemErrorMsg
                    message={
                      error === FIREBASE_ERROR.INVALID_CREDENTIAL
                        ? "Invalid email. Please try again"
                        : throwFirebaseException(error)
                    }
                  />
                ) : null
              }
              onInputChange={() => {
                if (FIREBASE_EMAIL_ERRORS.includes(error)) {
                  setError("");
                }
              }}
            />
            <AppFormItem
              type="password"
              name="password"
              label="Password"
              placeholder="Minimum 8 characters including 1 number"
              message="Please enter your password"
              required
              validateStatus={
                FIREBASE_PASSWORD_ERRORS.includes(error) ? "error" : ""
              }
              help={
                FIREBASE_PASSWORD_ERRORS.includes(error) ? (
                  <FormItemErrorMsg
                    message={
                      error === FIREBASE_ERROR.INVALID_CREDENTIAL
                        ? "Invalid password. Please try again"
                        : throwFirebaseException(error)
                    }
                  />
                ) : null
              }
              onInputChange={() => {
                if (FIREBASE_PASSWORD_ERRORS.includes(error)) {
                  setError("");
                }
              }}
            />
            <Typography variant="body1" className="sm:text-base text-sm">
              Forgot Password?
              {"  "}
              <Link
                to={ROUTES.FORGOT_PASSWORD}
                className="underline decoration-2 text-primary-main font-inter-medium hover:text-primary-main"
              >
                Reset Password
              </Link>
            </Typography>
            <Form.Item label={null} className="mt-[1.5em]">
              <AppButton
                htmlType={
                  !FIREBASE_EMAIL_ERRORS.includes(error) &&
                  !FIREBASE_PASSWORD_ERRORS.includes(error)
                    ? "submit"
                    : "button"
                }
                styleType={
                  isFormValid &&
                  !FIREBASE_EMAIL_ERRORS.includes(error) &&
                  !FIREBASE_PASSWORD_ERRORS.includes(error)
                    ? "primary"
                    : "disabled"
                }
                loading={loading}
              >
                Log In
              </AppButton>
            </Form.Item>
            <Typography variant="body1" className="sm:text-base text-sm">
              Don't have an account?
              {"  "}
              <Link
                to={ROUTES.SIGNUP}
                className="underline decoration-2 text-primary-main font-inter-medium hover:text-primary-main"
              >
                Create an Account
              </Link>
            </Typography>
          </Form>
        </Box>
      </Col>
      <Col xl={13} xs={24} className="xl:text-end text-center xl:mt-0 mt-10">
        <Box
          component="img"
          src={IMG.AUTH.LOGIN_CONTAINER_IMG}
          alt=""
          className="w-full max-w-[575px]"
        />
      </Col>
    </Row>
  );
};

export default LoginScreen;
