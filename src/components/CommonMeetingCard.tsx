// components/MeetingCard.tsx
import React, { Fragment } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { AppButton } from "@components";
import { ICON } from "@constants";
import type { IMeetingCardProps } from "@types";

const CommonMeetingCard: React.FC<IMeetingCardProps> = ({
  isRemindable = false,
  date,
  title,
  creator,
  tags,
  showBorder = true,
  handleClick,
}) => {
  return (
    <Box
      className={`px-2 me-2 ${
        showBorder
          ? "border-r-[1px] border-t-0 border-b-0 border-l-0 border-solid border-r-gray-thinner"
          : ""
      }`}
    >
      {/* Top Row: Remind Me or Time */}
      <Box className="flex justify-between items-center">
        <Box className="flex items-center gap-2">
          {isRemindable ? (
            <Fragment>
              <AppButton
                styleType="bordered"
                className="!h-[18px] !w-[106px] !text-[10px] rounded-[8px] font-inter-medium "
              >
                <Box className="flex items-center gap-3">
                  <Box
                    component={"img"}
                    src={ICON.CONTENTHUB.BELLICON}
                    className="w-[16px] h-[16px]"
                  />
                  Remind Me
                </Box>
              </AppButton>
              <Typography className="text-[12px] text-secondary-thin font-inter-medium">
                {date}
              </Typography>
            </Fragment>
          ) : (
            <Box className="flex items-center gap-1">
              <Box
                component={"img"}
                src={ICON.DASHBOARD.UPCOMINGNOTIFICATION}
                alt="notification"
                className="bg-primary-main rounded-[8px] w-[40px] h-[18px]"
              />
              <Typography className="text-[12px] text-secondary-thin font-inter-medium">
                {date}
              </Typography>
            </Box>
          )}
        </Box>

        <IconButton
          onClick={(e: any) => handleClick && handleClick(e)}
          className="p-0"
        >
          <Box component={"img"} src={ICON.DASHBOARD.VIDEODOT} alt="options" />
        </IconButton>
      </Box>

      {/* Title + Creator */}
      <Box className="flex gap-3 items-start mb-2 mt-3">
        <Avatar
          src={creator.avatar}
          alt={creator.name}
          className="w-[32px] h-[32px] "
        />
        <Box>
          <Typography className="text-[16px] font-inter-medium text-secondary-main truncate">
            {title}
          </Typography>
          <Typography className="text-[12px] text-secondary-light mt-[2px]">
            {creator.name}
          </Typography>
        </Box>
      </Box>

      {/* Tags */}
      <Box className="relative mt-4">
        <Box className="flex gap-2 overflow-x-auto flex-nowrap pe-4 no-scrollbar">
          {tags.map((tag) => (
            <Box
              key={tag}
              className="bg-white-main text-nowrap text-primary-main text-[12px] font-inter-medium flex items-center px-3 h-[33px] rounded-[8px]"
            >
              {tag}
            </Box>
          ))}
        </Box>
        {tags.length > 3 && (
          <Box className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-[linear-gradient(to_left,_#ffffff,_rgba(255,255,255,0))]" />
        )}
      </Box>
    </Box>
  );
};

export default CommonMeetingCard;
