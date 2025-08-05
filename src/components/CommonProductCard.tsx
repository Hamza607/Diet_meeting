import React from "react";
import { Box, Typography } from "@mui/material";
import { ICON } from "@constants";
import { AppButton } from "@components";
import type {IProductCardProps} from "@types"

const CommonProductCard: React.FC<IProductCardProps> = ({
  image,
  title,
  description,
  buttonLabel,
}) => {
  return (
    <Box className="flex items-start gap-4 p-2 rounded-xl bg-white-light shadow-lg pb-4">
      {/* Product Image */}
      <Box className="flex flex-col gap-2">
        <Box
          component="img"
          src={image}
          alt={title}
          className="w-[149px] h-auto object-contain rounded"
        />

        <AppButton className="!w-[149px] !h-[35px]">
          <Box className="flex items-center gap-2">
            <Box
              component="img"
              src={ICON.DASHBOARD.LIVEMEETINGSHOPPINGCARD}
              alt={title}
            />
            {buttonLabel}
          </Box>
        </AppButton>
      </Box>

      {/* Text content */}
      <Box className="flex-1 justify-end items-center">
        <Typography className="font-poppins-bold text-[20px] mb-1">
          {title}
        </Typography>
        <Typography className="w-full lg:w-[700px] mb-4 font-inter-regular text-[12px] text-secondary-main">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CommonProductCard;
