import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { Button, Col, Form, Row } from "antd";
import type { IContactUsScreen } from "@types";
import { IMG } from "@constants";
import { AppFormItem } from "@components";

const ContactUsScreen: React.FC<IContactUsScreen> = ({
  formSuccess,
  setFormSuccess,
}) => {
  return (
    <Box className="px-[1em] md:py-[7em] sm:py-[5em] py-[3em] bg-white-light">
      <Box className="w-full max-w-[1250px] mx-auto">
        <Typography className="sm:text-[2em] text-xl font-bold font-poppins-bold text-black-main mb-[1em]">
          Contact Us
        </Typography>
        <Row gutter={[{ lg: 40 }, { lg: 0, md: 40, sm: 40, xs: 40 }]}>
          <Col lg={14} xs={24}>
            {formSuccess ? (
              <Fragment>
                <Typography variant="h1" className="text-[2.5em] mt-3">
                  Thank you for your Message!
                </Typography>
                <Typography
                  variant="body1"
                  className="text-secondary-light mt-[2em] mb-[3em]"
                >
                  We received your ticket and will be contacting you with the
                  information provided.
                </Typography>
                <Button
                  htmlType="submit"
                  className="sm:w-[230px] w-full h-[52px] !bg-primary-main !border-primary-main rounded-[5px] !text-white-main text-lg font-medium font-inter-medium !shadow-none"
                  onClick={() => setFormSuccess(false)}
                >
                  Back to Form
                </Button>
              </Fragment>
            ) : (
              <Form
                name="contact-us-form"
                autoComplete="off"
                layout="vertical"
                onFieldsChange={(changedFields, allFields) => {
                  console.log("changedFields", changedFields);
                  console.log("allFields", allFields);
                }}
              >
                <Box className="w-full flex gap-5">
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
                  name="email"
                  label="Email"
                  placeholder="Enter Email"
                  required
                  message="Please enter your email"
                />
                <AppFormItem
                  type="input"
                  name="subject"
                  label="Subject"
                  placeholder="Enter Subject of this Message"
                  required
                  message="Please enter your subject"
                />
                <AppFormItem
                  type="message"
                  name="message"
                  label="Message"
                  placeholder="Enter Message"
                  autoSize={{ minRows: 8, maxRows: 8 }}
                  required
                  message="Please enter your message"
                />
                <Box className="flex justify-end">
                  <Button
                    htmlType="submit"
                    className="w-[230px] h-[52px] !bg-primary-main !border-primary-main rounded-[5px] !text-white-main text-lg font-medium font-inter-medium !shadow-none"
                    onClick={() => setFormSuccess(true)}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Col>
          <Col lg={10} xs={24} className="lg:text-end text-center">
            <Box
              component="img"
              src={IMG.LANDING.CONTACT_US_CONTAINER_IMG}
              alt="contact-us"
              className="w-full max-w-[476px]"
            />
          </Col>
        </Row>
      </Box>
    </Box>
  );
};

export default ContactUsScreen;
