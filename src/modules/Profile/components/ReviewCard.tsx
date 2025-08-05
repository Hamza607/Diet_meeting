import React, { Fragment, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import type { IReviewCard } from "@types";
import { ICON } from "@constants";
import { EditDeletePopup } from "@components";

const ReviewCard: React.FC<IReviewCard> = ({
  id,
  avatar,
  name,
  date,
  text,
  image,
  title,
}) => {
  const [editDeletePopup, setEditDeletePopup] =
    useState<HTMLButtonElement | null>(null);
  return (
    <Fragment>
      <Box id={id} className="w-full max-w-[780px] flex items-start gap-3 mb-8">
        <Box>
          <Box className="flex items-start gap-2">
            <Box
              component="img"
              src={avatar}
              alt=""
              className="w-[20px] h-[20px] rounded-full"
            />
            <Box>
              <Box className="flex items-baseline gap-3">
                <Typography className="text-xs font-inter-bold font-bold">
                  {name}
                </Typography>
                <Typography className="text-[0.625em] font-inter-regular font-normal text-secondary-thin">
                  {date}
                </Typography>
              </Box>
              <Typography className="text-xs font-inter-regular font-normal text-secondary-light mt-3">
                {text}
              </Typography>
            </Box>
          </Box>
          <Box className="flex items-center gap-2 mt-3">
            <Box
              component="img"
              src={image}
              alt=""
              className="w-[100px] h-[56px] rounded-[20px]"
            />
            <Typography>{title}</Typography>
          </Box>
        </Box>
        <IconButton
          size="small"
          onClick={(e) => {
            e.preventDefault();
            setEditDeletePopup(e.currentTarget);
          }}
        >
          <Box
            component="img"
            src={ICON.DASHBOARD.VIDEODOT}
            alt="more options"
          />
        </IconButton>
      </Box>
      {/* modal & popups */}
      <EditDeletePopup
        setAnchorEl={setEditDeletePopup}
        anchorEl={editDeletePopup}
      />
    </Fragment>
  );
};

export default ReviewCard;
