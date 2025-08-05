import React from "react";
import { Box, Typography } from "@mui/material";
import type { IWorkCard } from "@types";

const WorkCard: React.FC<IWorkCard> = ({ image, title, description }) => {
  return (
    <Box className="flex items-start gap-[1.5em] w-full">
      <Box className="min-w-[60px] h-[60px] bg-white-light rounded-full flex items-center justify-center">
        <Box component={"img"} src={image} alt="" />
      </Box>
      <Box>
        <Typography
          variant="h6"
          className="font-poppins-bold font-bold text-secondary-main mb-[0.5em] leading-[1.25]"
        >
          {title}
        </Typography>
        <Typography className="text-secondary-light leading-[1.4]">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkCard;
