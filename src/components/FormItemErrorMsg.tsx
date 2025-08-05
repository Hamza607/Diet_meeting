import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { Typography } from "@mui/material";
import type { IFormItemErrorMsg } from "@types";

const FormItemErrorMsg: React.FC<IFormItemErrorMsg> = ({ message }) => {
  return (
    <Typography variant="body2" className="text-error-main flex items-center">
      <ErrorIcon className="text-error-main text-base mr-1" /> {message}
    </Typography>
  );
};

export default FormItemErrorMsg;
