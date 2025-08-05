import React from "react";
import { Box, Typography } from "@mui/material";
import { AppButton } from "@components";
import type { IActionButtonsGroupProps } from "@types";

const GroupButtons: React.FC<IActionButtonsGroupProps> = ({
  buttons,
  className = "",
}) => {
  return (
    <Box className={`flex gap-2 mt-2 md:mt-0 ${className}`}>
      {buttons.map((button, index) => (
        <AppButton
          key={index}
          styleType="bordered"
          className="!w-[110px] !h-[35px]"
          onClick={button.onClick}
        >
          <Box className="flex items-center gap-2">
            {button.icon}
            <Typography className="font-inter-medium md:block hidden text-primary-main text-[16px]">
              {button.label}
            </Typography>
          </Box>
        </AppButton>
      ))}
    </Box>
  );
};

export default GroupButtons;
