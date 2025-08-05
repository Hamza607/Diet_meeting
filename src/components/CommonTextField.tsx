import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import type { ICommonInputProps } from "@types";

const CommonTextField: React.FC<ICommonInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  width = 210,
  className,
  type = "text",
}) => {
  return (
    <Box className="mb-6">
      <Typography className="text-secondary-main text-[14px] font-inter-medium mb-2">
        {label}
      </Typography>
      <TextField
        size="small"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${className} w-[${width}]`}
      />
    </Box>
  );
};
export default CommonTextField;
