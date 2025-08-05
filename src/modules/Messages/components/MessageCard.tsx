import React from "react";
import { Box, Typography } from "@mui/material";
import type { IMessageCard } from "@types";

const MessageCard: React.FC<IMessageCard> = ({ id, userId, message, time }) => {
  return (
    <Box
      id={id}
      className={`w-fit mb-3 ${userId === "1" ? "ml-auto" : "mr-auto"}`}
    >
      <Box
        className={`w-full max-w-[630px] py-[1em] px-[1.5em] rounded-[32px] mb-1 ${
          userId === "1"
            ? "bg-primary-main rounded-br-[0]"
            : "bg-white-light rounded-bl-[0]"
        }`}
      >
        <Typography
          className={`text-xs font-inter-regular font-normal ${
            userId === "1" ? "text-white-main" : "text-secondary-main"
          }`}
        >
          {message}
        </Typography>
      </Box>
      <Typography
        className={`text-[13px] font-inter-regular font-normal text-secondary-thin ${
          userId === "1" ? "text-end mr-1" : "text-start ml-1"
        }`}
      >
        {time}
      </Typography>
    </Box>
  );
};

export default MessageCard;
