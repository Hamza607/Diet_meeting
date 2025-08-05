import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ICON } from "@constants";
import type { IProfileMeetingCard } from "@types";

const MeetingCard: React.FC<IProfileMeetingCard> = ({
  id,
  avatar,
  date,
  title,
  name,
}) => {
  const [isNotify, setIsNotify] = useState(false);
  return (
    <Box id={id} className="w-full max-w-[1010px] flex items-center gap-3 mb-5">
      <Box
        component="img"
        src={avatar}
        alt="notify"
        className="w-[32px] h-[32px] rounded-full"
      />
      <Box className="w-full">
        <Box className="flex justify-between items-center">
          <Typography className="text-xs text-secondary-thin">
            {date}
          </Typography>
          <Button
            className={`w-[73px] h-[18px] py-[0.25em] px-[0.75em] border-none rounded-lg font-inter-medium font-medium text-[0.5em] gap-1 ${
              isNotify
                ? "bg-primary-main"
                : "bg-white-light hover:bg-primary-main/20"
            }`}
            onClick={() => setIsNotify(!isNotify)}
          >
            <Box
              component="img"
              src={ICON.DASHBOARD.HEADERNOTIFICATION}
              alt="notify"
              className={`w-[14px] ${
                isNotify
                  ? "brightness-0 invert sepia-100 saturate-0 hue-rotate-288 brightness-102 contrast-102"
                  : ""
              }`}
            />
            {!isNotify && "Notify"}
          </Button>
        </Box>
        <Box className="flex justify-between items-center">
          <Box>
            <Typography className="mb-1">{title}</Typography>
            <Typography className="text-xs text-gray-light">{name}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MeetingCard;
