import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Form } from "antd";
import type { IVerifyModal } from "@types";
import { ICON } from "@constants";
import { AppButton, AppFormItem, AppModal } from "@components";

const VerifyModal: React.FC<IVerifyModal> = ({
  open,
  onClose,
  title,
  handleSubmit,
}) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[629px] rounded-[20px] sm:p-[2.5rem] p-[1.25rem]"
    >
      <Box>
        <Box className="flex justify-end w-full mr-0 lg:mr-16">
          <IconButton onClick={onClose}>
            <Box component="img" src={ICON.DASHBOARD.MODALCLOSE} alt="" />
          </IconButton>
        </Box>
        <Typography variant="h3">{title}</Typography>
        <Typography className="sm:text-xl text-sm text-secondary-light my-5">
          Enter the 6 digit code sent to phone number ending with 7890
        </Typography>
        <Form name="verify-modal-form" autoComplete="off" layout="vertical">
          <AppFormItem name="code" type="code" />
          <Form.Item name="submit" label={null}>
            <AppButton
              styleType="primary"
              htmlType="submit"
              onClick={handleSubmit}
            >
              Verify
            </AppButton>
          </Form.Item>
          <Form.Item name="resend-code" label={null} className="mb-0">
            <AppButton styleType="text">Resend Code</AppButton>
          </Form.Item>
        </Form>
      </Box>
    </AppModal>
  );
};

export default VerifyModal;
