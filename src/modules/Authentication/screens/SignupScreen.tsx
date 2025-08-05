import React from "react";
import { Link } from "react-router-dom";
import { Box, Checkbox, Typography } from "@mui/material";
import { Col, Form, Row } from "antd";
import type { ISignupScreen } from "@types";
import { EMAIL_REGEX, HAS_NUMBER_REGEX } from "@validations";
import { FIREBASE_EMAIL_ERRORS, FIREBASE_ERROR, IMG, ROUTES } from "@constants";
import { throwFirebaseException } from "@utils";
import { AppFormItem, AppButton, FormItemErrorMsg } from "@components";
import { useAuthContext } from "@context";

const SignupScreen: React.FC<ISignupScreen> = ({
  form,
  loading,
  isFormValid,
  handleFormFieldsChange,
  onSubmit,
}) => {
  const { error, setError } = useAuthContext();
  return (
    <Row>
      <Col xl={11} xs={24} className="flex justify-center">
        <Box>
          <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl">
            Join the DietMeetings Community
          </Typography>
          <Typography
            variant="h6"
            className="text-secondary-light lg:text-xl sm:text-lg text-xs mt-[1em] mb-[2em]"
          >
            Join live meetings, track your progress and connect with others.
          </Typography>
          <Form
            form={form}
            name="signup-form"
            autoComplete="off"
            layout="vertical"
            onFieldsChange={handleFormFieldsChange}
            onFinish={onSubmit}
            initialValues={{
              phone: "",
            }}
          >
            <AppFormItem
              type="input"
              name="email"
              label="Email Address"
              placeholder="Enter your email"
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
              validator={(value) => {
                if (!EMAIL_REGEX.test(value)) {
                  return Promise.reject(
                    <FormItemErrorMsg
                      message={throwFirebaseException(
                        FIREBASE_ERROR.INVALID_EMAIL
                      )}
                    />
                  );
                }

                return Promise.resolve();
              }}
              onInputChange={() => {
                if (FIREBASE_EMAIL_ERRORS.includes(error)) {
                  setError("");
                }
              }}
            />
            <AppFormItem
              type="phone"
              name="phone"
              label="Phone Number (Optional)"
              placeholder="(000) 000-0000 (Optional)"
            />
            <AppFormItem
              type="password"
              name="password"
              label="Password"
              placeholder="Minimum 8 characters including 1 number"
              message="Please enter your password"
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
              label="Confirm Password"
              placeholder="Minimum 8 characters including 1 number"
              message="Please confirm your password"
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
            <AppFormItem
              type="others"
              name="terms-of-service"
              valuePropName="checked"
              required
            >
              <Box className="flex items-center">
                <Checkbox className="hover:bg-transparent sm:pr-2 pr-1" />
                <Typography
                  variant="body1"
                  className="lg:text-base sm:text-sm text-xs"
                >
                  I agree the
                  {"  "}
                  <Link
                    to={ROUTES.TERMS_OF_SERVICE}
                    className="underline decoration-2 text-primary-main font-inter-bold hover:text-primary-main"
                  >
                    Terms of Service
                  </Link>
                  {"  "}
                  and
                  {"  "}
                  <Link
                    to={ROUTES.PRIVACY_POLICY}
                    className="underline decoration-2 text-primary-main font-inter-bold hover:text-primary-main"
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Box>
            </AppFormItem>
            <Form.Item label={null} className="mt-[1.5em]">
              <AppButton
                htmlType={
                  !FIREBASE_EMAIL_ERRORS.includes(error) ? "submit" : "button"
                }
                styleType={
                  isFormValid && !FIREBASE_EMAIL_ERRORS.includes(error)
                    ? "primary"
                    : "disabled"
                }
                loading={loading}
              >
                Create Account
              </AppButton>
            </Form.Item>
            <Typography variant="body1">
              Already have an account?
              {"  "}
              <Link
                to={ROUTES.LOGIN}
                className="underline decoration-2 text-primary-main font-inter-medium hover:text-primary-main"
              >
                Log In
              </Link>
            </Typography>
          </Form>
        </Box>
      </Col>
      <Col
        xl={13}
        xs={24}
        className="xl:mt-0 mt-10 flex items-center xl:justify-end justify-center"
      >
        <Box
          component="img"
          src={IMG.AUTH.SIGNUP_CONTAINER_IMG}
          alt=""
          className="w-full max-w-[575px]"
        />
      </Col>
    </Row>
  );
};

export default SignupScreen;
