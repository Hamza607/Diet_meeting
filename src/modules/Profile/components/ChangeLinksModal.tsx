import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Form } from "antd";
import type { IChangeLinksModal } from "@types";
import { ICON } from "@constants";
import { AppButton, AppFormItem, AppModal } from "@components";

const ChangeLinksModal: React.FC<IChangeLinksModal> = ({
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
            src={ICON.PROFILE.LINKS_ICON}
            alt=""
            className="w-[44px] h-[44px]"
          />
          <Typography
            variant="h3"
            className="sm:text-4xl font-inter-semibold font-semibold"
          >
            Edit Links
          </Typography>
        </Box>
        <Form name="verify-modal-form" autoComplete="off" layout="vertical">
          <AppFormItem name="link-1" type="input" label="Link 1" />
          <AppFormItem name="link-2" type="input" label="Link 2" />
          <AppFormItem name="link-3" type="input" label="Link 3" />
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

export default ChangeLinksModal;
