import React from "react";
import { Box, Typography } from "@mui/material";
import type { IRestrictionCard } from "@types";

const RestrictionCard: React.FC<IRestrictionCard> = ({
  active,
  image,
  title,
  description,
  handleClick,
}) => {
  return (
    <Box
      className={`w-full h-full rounded-3xl py-[0.75rem] md:px-[1.25rem] px-[1rem] flex items-center md:gap-3 gap-2 cursor-pointer ${
        active ? "bg-primary-main text-white-main" : "bg-white-light"
      }`}
      onClick={handleClick}
    >
      <Box
        component="img"
        src={image}
        alt=""
        className={
          active
            ? "brightness-0 invert sepia-100 saturate-0 hue-rotate-288 brightness-102 contrast-102"
            : ""
        }
      />
      <Box>
        <Typography
          className={`md:text-xl text-base font-poppins-bold font-bold mb-1 ${
            active ? "text-inherit" : ""
          }`}
        >
          {title}
        </Typography>
        <Typography
          className={`text-sm ${
            active ? "text-inherit" : "text-secondary-light"
          }`}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default RestrictionCard;
