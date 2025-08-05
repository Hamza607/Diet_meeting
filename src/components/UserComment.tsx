import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { IUserComment } from "@types";
import { ICON } from "@constants";

const UserComment: React.FC<IUserComment> = ({
  id,
  avatar,
  username,
  time,
  comment,
  reply,
  replyValue,
  handleReplyClick,
  handleOptionsClick,
}) => {
  return (
    <Box
      id={id}
      className={`flex items-start gap-5 ${!reply ? "p-3 pl-0" : ""}`}
    >
      <Box
        component="img"
        src={avatar}
        alt=""
        className="w-[36px] h-[36px] rounded-full"
      />
      <Box>
        <Box className="flex gap-3 mb-2">
          <Typography className="text-xs font-inter-bold font-bold">
            {username}
          </Typography>
          <Typography className="text-[10px] font-inter-regular font-normal text-secondary-thin">
            {time}
          </Typography>
        </Box>
        <Typography className="text-xs font-inter-regular font-normal text-secondary-light">
          {comment}
        </Typography>
        {reply && (
          <Button
            className="w-[103px] h-[34px] justify-start p-0 bg-transparent text-secondary-main rounded-none text-xs font-inter-medium font-medium mt-3"
            onClick={handleReplyClick}
          >
            {replyValue ? "Cancel" : "Reply"}
          </Button>
        )}
      </Box>
      <IconButton size="small" onClick={handleOptionsClick}>
        <Box component="img" src={ICON.DASHBOARD.VIDEODOT} alt="more options" />
      </IconButton>
    </Box>
  );
};

export default UserComment;
