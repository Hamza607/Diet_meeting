import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Button, Dropdown, Form, Input } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ICON, WEIGHT__UNITS } from "@constants";
import { AppButton, AppFormItem, AppModal } from "@components";
import type { ILogWeightModal } from "@types";

const LogWeightModal: React.FC<ILogWeightModal> = ({
  open,
  onClose,
  logWeightUnit,
  handleLogWeightUnitChange,
}) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[549px] rounded-[12px] sm:py-[2.875rem] sm:px-[2.25rem] p-[1.25rem]"
    >
      <Box>
        <Box className="flex justify-end w-full mr-0 lg:mr-16">
          <IconButton onClick={onClose}>
            <Box component="img" src={ICON.DASHBOARD.MODALCLOSE} alt="" />
          </IconButton>
        </Box>
        <Typography variant="h3" className="mb-[1.25em]">
          Log Today’s Weight
        </Typography>
        <Form name="log-weight-form" layout="vertical">
          <AppFormItem type="others" name="weight" label="Enter Today’s Weight">
            <Box className="flex items-center gap-4">
              <Input
                className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium text-secondary-main hover:!border-primary-main focus:!border-primary-main placeholder:text-secondary-thin"
                placeholder="0"
                maxLength={4}
              />
              <Dropdown
                menu={{
                  items: WEIGHT__UNITS,
                  onClick: handleLogWeightUnitChange,
                }}
                trigger={["click"]}
              >
                <Button
                  onClick={(e) => e.preventDefault()}
                  className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium !text-secondary-main hover:!border-primary-main focus:!border-primary-main"
                >
                  {logWeightUnit}
                  {"  "}
                  <ArrowBackIosNewIcon className="text-base text-secondary-thin -rotate-90" />
                </Button>
              </Dropdown>
            </Box>
          </AppFormItem>
          <AppFormItem
            type="message"
            name="note"
            label="Note (Optional)"
            placeholder="Enter Note (Max 100 characters)"
            autoSize={{ minRows: 2, maxRows: 4 }}
            maxLength={100}
            itemClassName="mb-[2.25rem]"
          />
          <AppFormItem
            type="others"
            name="submit"
            label={null}
            itemClassName="mb-4"
          >
            <AppButton htmlType="submit" styleType="primary" onClick={onClose}>
              Save
            </AppButton>
          </AppFormItem>
          <AppFormItem
            type="others"
            name="submit"
            label={null}
            itemClassName="mb-0"
          >
            <AppButton styleType="bordered" onClick={onClose}>
              Cancel
            </AppButton>
          </AppFormItem>
        </Form>
      </Box>
    </AppModal>
  );
};

export default LogWeightModal;
