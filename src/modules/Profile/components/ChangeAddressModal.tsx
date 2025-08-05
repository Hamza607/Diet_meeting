import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Form } from "antd";
import type { IChangeAddressModal } from "@types";
import { ICON } from "@constants";
import { AppButton, AppFormItem, AppModal } from "@components";

const ChangeAddressModal: React.FC<IChangeAddressModal> = ({
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
        <Box className="mb-8 flex items-center gap-2">
          <Box
            component="img"
            src={ICON.PROFILE.LOCATION_ICON}
            alt=""
            className="w-[44px] h-[44px]"
          />
          <Typography
            variant="h3"
            className="sm:text-4xl font-inter-semibold font-semibold"
          >
            Edit Address
          </Typography>
        </Box>
        <Form name="verify-modal-form" autoComplete="off" layout="vertical">
          <AppFormItem
            name="address"
            type="input"
            label="Address"
            required
            message="Please enter your address"
          />
          <Form.Item name="submit" label={null} className="mb-0">
            <AppButton
              styleType="primary"
              htmlType="submit"
              onClick={handleSubmit}
            >
              Save
            </AppButton>
          </Form.Item>
        </Form>
      </Box>
    </AppModal>
  );
};

export default ChangeAddressModal;
