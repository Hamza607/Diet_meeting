import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Form } from "antd";
import type { IChangeEmailModal } from "@types";
import { ICON } from "@constants";
import { AppButton, AppFormItem, AppModal } from "@components";

const ChangeEmailModal: React.FC<IChangeEmailModal> = ({
  open,
  onClose,
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
        <Typography variant="h3" className="mb-4">
          Change email address
        </Typography>
        <Form name="verify-modal-form" autoComplete="off" layout="vertical">
          <AppFormItem
            name="current-email"
            type="input"
            label="Current Email"
            required
            message="Please enter your current email"
          />
          <AppFormItem
            name="new-email"
            type="input"
            label="New Email"
            required
            message="Please enter your new email"
          />
          <AppFormItem
            name="confirm-email"
            type="input"
            label="Confirm Email"
            required
            message="Please enter your new email"
          />
          <Form.Item name="submit" label={null} className="mb-0">
            <AppButton
              styleType="primary"
              htmlType="submit"
              onClick={handleSubmit}
            >
              Change Email
            </AppButton>
          </Form.Item>
        </Form>
      </Box>
    </AppModal>
  );
};

export default ChangeEmailModal;
