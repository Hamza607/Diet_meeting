import React from "react";
import { Box, IconButton } from "@mui/material";
import { Form } from "antd";
import type { IChangeAboutModal } from "@types";
import { ICON } from "@constants";
import { AppButton, AppFormItem, AppModal } from "@components";

const ChangeAboutModal: React.FC<IChangeAboutModal> = ({
  open,
  onClose,
  handleSubmit,
}) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[469px] rounded-[20px] p-[1.25rem]"
    >
      <Box>
        <Box className="flex justify-end w-full mr-0 lg:mr-16">
          <IconButton onClick={onClose}>
            <Box component="img" src={ICON.DASHBOARD.MODALCLOSE} alt="" />
          </IconButton>
        </Box>
        <Form name="verify-modal-form" autoComplete="off" layout="vertical">
          <AppFormItem
            name="about"
            type="message"
            label="About Me"
            placeholder="Enter Message"
            autoSize={{ minRows: 4, maxRows: 6 }}
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

export default ChangeAboutModal;
