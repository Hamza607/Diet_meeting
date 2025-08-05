import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import { Form } from "antd";
import type { IChangePasswordModal } from "@types";
import { ICON, ROUTES } from "@constants";
import { AppButton, AppFormItem, AppModal } from "@components";

const ChangePasswordModal: React.FC<IChangePasswordModal> = ({
  open,
  onClose,
  handleSubmit,
}) => {
  const navigate = useNavigate();
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
          Change Password
        </Typography>
        <Form name="verify-modal-form" autoComplete="off" layout="vertical">
          <AppFormItem
            name="current-password"
            type="password"
            label="Current Password"
            required
            message="Please enter your current password"
          />
          <AppFormItem
            name="new-password"
            type="password"
            label="New Password"
            required
            message="Please enter your new password"
          />
          <AppFormItem
            name="confirm-password"
            type="password"
            label="Confirm Password"
            required
            message="Please enter your new password"
          />
          <Form.Item name="submit" label={null}>
            <AppButton
              styleType="primary"
              htmlType="submit"
              onClick={handleSubmit}
            >
              Change Password
            </AppButton>
          </Form.Item>
        </Form>
        <Typography className="sm:text-xl text-sm text-secondary-light mb-4">
          Forgot Password?
        </Typography>
        <AppButton
          styleType="bordered"
          onClick={() => {
            navigate(ROUTES.FORGOT_PASSWORD);
            onClose();
          }}
        >
          Reset Password
        </AppButton>
      </Box>
    </AppModal>
  );
};

export default ChangePasswordModal;
