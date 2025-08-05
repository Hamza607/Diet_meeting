import React from "react";
import { Box, Typography } from "@mui/material";
import { ICON } from "@constants";
import type { IWeightCard } from "@types";

const WeightCard: React.FC<IWeightCard> = ({
  id,
  type,
  title,
  weightColor,
  weight,
  unit,
  edit,
  editAction,
}) => {
  return (
    <Box
      id={id}
      className={`w-full p-[1.25em] border-[1px] border-solid border-primary-main rounded-[20px] text-center ${
        type === "primary"
          ? "bg-gradient-to-r from-primary-hard to-primary-light"
          : "bg-transparent"
      }`}
    >
      <Box className="flex items-center justify-center mb-3">
        <Typography
          className={`sm:text-xl text-xs font-inter-regular font-normal ${
            type === "primary" ? "text-gray-thinner" : "text-secondary-light"
          } ${edit ? "xl:mx-5 mx-2" : ""}`}
        >
          {title}
        </Typography>
        {edit && (
          <Box
            component="img"
            src={ICON.PROFILE.EDIT_ICON}
            className="cursor-pointer sm:w-[24px] sm:h-[24px] w-[18px] h-[18px]"
            onClick={editAction}
          />
        )}
      </Box>
      <Box className="flex items-baseline gap-2 justify-center">
        <Typography
          className={`md:text-[64px] sm:text-5xl text-[32px] font-inter-regular font-normal ${weightColor}`}
        >
          {weight}
        </Typography>
        <Typography
          className={`sm:text-xl text-xs font-inter-regular font-normal ${
            type === "primary" ? "text-gray-thinner" : "text-secondary-light"
          }`}
        >
          {unit}
        </Typography>
      </Box>
    </Box>
  );
};

export default WeightCard;
