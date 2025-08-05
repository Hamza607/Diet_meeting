import React from "react";
import { Box, Typography } from "@mui/material";
import { AppButton, AppFormItem } from "@components";
import { Switch } from "antd";
import type { ISecurityScreen } from "@types";

const SecurityScreen: React.FC<ISecurityScreen> = ({
  handleEmailVerifyModalOpen,
  handlePasswordVerifyModalOpen,
  handleChangePhoneModalOpen,
}) => {
  return (
    <Box>
      <Box className="w-full max-w-[680px] flex items-center gap-[1em]">
        <AppFormItem
          type="input"
          layout="vertical"
          label="Email"
          placeholder="Enter your email"
          itemClassName="w-full"
          inputClassName="!bg-white-strong"
          readOnly
          defaultValue="jhonbaer@gmail.com"
        />
        <AppButton
          styleType="primary"
          className="sm:max-w-[126px] max-w-[100px] mt-[1em] mb-2"
          onClick={handleEmailVerifyModalOpen}
        >
          Update
        </AppButton>
      </Box>
      <Box className="w-full max-w-[680px] flex items-center gap-[1em]">
        <AppFormItem
          type="password"
          layout="vertical"
          label="Password"
          placeholder="Enter your password"
          itemClassName="w-full"
          inputClassName="!bg-white-strong"
          readOnly
          defaultValue="**********"
        />
        <AppButton
          styleType="primary"
          className="sm:max-w-[126px] max-w-[100px] mt-[1em] mb-2"
          onClick={handlePasswordVerifyModalOpen}
        >
          Update
        </AppButton>
      </Box>
      <Box className="flex gap-3 mt-[1rem] mb-[1.75rem]">
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
        <Typography className="sm:text-[15px] text-sm">2FA</Typography>
      </Box>
      <Box className="w-full max-w-[680px] flex items-center gap-[1em]">
        <AppFormItem
          type="phone"
          layout="vertical"
          label="Phone Number"
          placeholder="(000) 000-0000 (Optional)"
          itemClassName="w-full"
          inputClassName="!bg-white-strong"
          readOnly
          defaultValue="16543433299"
        />
        <AppButton
          styleType="primary"
          className="sm:max-w-[126px] max-w-[100px] mt-[1em] mb-2"
          onClick={handleChangePhoneModalOpen}
        >
          Update
        </AppButton>
      </Box>
    </Box>
  );
};

export default SecurityScreen;
