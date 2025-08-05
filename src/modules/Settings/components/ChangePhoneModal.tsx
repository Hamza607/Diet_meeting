import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Form } from "antd";
import type { IChangePhoneModal } from "@types";
import { ICON } from "@constants";
import { AppButton, AppFormItem, AppModal } from "@components";

const ChangePhoneModal: React.FC<IChangePhoneModal> = ({
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
          Change Phone Number
        </Typography>
        <Form name="verify-modal-form" autoComplete="off" layout="vertical">
          <AppFormItem
            name="new-phone"
            type="phone"
            label="New Phone Number"
            required
            message="Please enter your new phone number"
          />
          <AppFormItem
            name="confirm-phone"
            type="phone"
            label="Confirm Phone Number"
            required
            message="Please confirm your phone number"
          />
          <Form.Item name="submit" label={null} className="mb-0">
            <AppButton
              styleType="primary"
              htmlType="submit"
              onClick={handleSubmit}
            >
              Change Phone Number
            </AppButton>
          </Form.Item>
        </Form>
      </Box>
    </AppModal>
  );
};

export default ChangePhoneModal;
