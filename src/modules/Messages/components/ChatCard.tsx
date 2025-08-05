import React from "react";
import { Box, Typography } from "@mui/material";
import { WiTime5 } from "react-icons/wi";
import type { IChatCard } from "@types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@constants";

const ChatCard: React.FC<IChatCard> = ({
  active,
  unread,
  id,
  avatar,
  userName,
  message,
  time,
  className,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      id={id}
      className={`relative w-full pt-[1em] pb-[1.5em] pl-[1.5em] pr-[0.5em] border-b-[1px] border-t-0 border-l-0 border-solid border-customGrey-thinnest cursor-pointer ${
        active ? "bg-white-light border-r-0" : "sm:border-r-[1px] border-r-0"
      } ${className}`}
      onClick={() => {
        navigate(`${ROUTES.DASHBOARD_MESSAGES_ID}${id}`);
      }}
    >
      <Box className="flex">
        <Box
          component="img"
          src={avatar}
          alt=""
          className="w-[35px] h-[35px] rounded-full mr-[1em]"
        />
        <Box>
          <Typography className="text-[15px] mt-[0.375em] mb-[0.625em]">
            {userName}
          </Typography>
          <Typography className="text-[12px] font-inter-regular font-normal text-secondary-light w-auto max-w-[262px]">
            {message}
          </Typography>
          <Box className="flex mt-[0.75em]">
            <WiTime5 className="text-secondary-thin mr-2" />
            <Typography className="text-[11px] font-inter-regular font-normal text-secondary-thin">
              {time}
            </Typography>
          </Box>
        </Box>
      </Box>
      {unread && (
        <Box className="w-[8px] h-[8px] bg-primary-main rounded-full absolute top-[1.125em] right-[1em]" />
      )}
    </Box>
  );
};

export default ChatCard;
