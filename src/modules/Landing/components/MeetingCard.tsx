import React from "react";
import { Box, Typography } from "@mui/material";
import { IoPlay } from "react-icons/io5";
import type { IMeetingCard } from "@types";

const MeetingCard: React.FC<IMeetingCard> = ({
  id,
  image,
  title,
  description,
}) => {
  return (
    <Box id={id} className="sm:!w-[366px] !w-[194px] px-[1em]">
      <Box className="relative">
        <Box component={"img"}
          src={image}
          alt=""
          className="w-full sm:h-[244px] h-[129px] rounded-2xl"
        />
        <IoPlay
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white-main sm:text-[3em] text-[2em]"
          cursor="pointer"
        />
      </Box>
      <Typography className="sm:text-base text-sm text-secondary-main mt-[1em] mb-[0.5em]">
        {title}
      </Typography>
      <Typography className="text-xs font-inter-regular font-normal text-secondary-light">
        {description}
      </Typography>
    </Box>
  );
};

export default MeetingCard;
