// components/CustomPopover.tsx
import React from "react";
import { Box, Popover } from "@mui/material";
import type { ICustomPopover } from "@types";

const AppPopover: React.FC<ICustomPopover> = ({
  children,
  open,
  anchorEl,
  onClose,
  classname,
  id,
  anchorOrigin = {
    vertical: "bottom",
    horizontal: "right",
  },
  transformOrigin = {
    vertical: "top",
    horizontal: "right",
  },
}) => {
  return (
    <Popover
      id={id}
      open={open}
      disablePortal
      anchorEl={anchorEl}
      className={`${classname} rounded-[12px] `}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
    >
      <Box className="bg-white-main w-full rounded-[12px] overflow-hidden">
        {children}
      </Box>
    </Popover>
  );
};

export default AppPopover;
