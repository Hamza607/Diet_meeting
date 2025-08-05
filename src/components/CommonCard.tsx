// components/VideoCard.tsx
import React, { Fragment } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { ICON } from "@constants";
import { Link } from "react-router-dom";
import type {ICardProps} from "@types" 



const CommonCard: React.FC<ICardProps> = ({
  thumbnail,
  duration,
  live,
  title,
  creator,
  postedAt,
  tags,
  link,
  showBookmark = true,
  data,
  liveMeeting = true,
  // starFilled = true,
  handleClick,
}) => {
  return (
    <Box
      className="pr-2  "

      // className="relative min-w-[280px] w-[372px] bg-white rounded-[20px] "
    >
      {/* Thumbnail */}
      {link ? (
        <Link
          key={data.id}
          to={link}
          className="focus:outline-none focus:ring-0 focus:border-none"
        >
          <Box className="relative">
            <Box
              component="img"
              src={thumbnail}
              alt="thumbnail"
              className="w-full h-[216px] object-cover rounded-[20px]"
            />
            {/* Bookmark Icon */}
            {liveMeeting && (
              <Fragment>
                {showBookmark ? (
                  <Box className="absolute cursor-pointer top-2 right-2 bg-white p-[6px]">
                    <Box
                      component={"img"}
                      src={ICON.DASHBOARD.VIDEOSTAR}
                      alt="bookmark"
                    />
                  </Box>
                ) : (
                  <Box className="absolute cursor-pointer top-2 right-2 bg-white p-[6px]">
                    <Box
                      component={"img"}
                      src={ICON.DASHBOARD.STARFILLED}
                      alt="bookmark"
                    />
                  </Box>
                )}
              </Fragment>
            )}
            {/* Duration */}
            {duration && !live && (
              <Box className="absolute bottom-3 right-2 bg-primary-main text-white-main text-[11px] px-2 w-[45px] h-[16px] rounded-[8px] flex justify-center items-center">
                {duration}
              </Box>
            )}

            {live && (
              <Box className="absolute bottom-3 right-2 bg-error-main text-white-main text-[11px] px-2 w-[63px] h-[16px] rounded-[8px] flex justify-center items-center">
                {live}
              </Box>
            )}
          </Box>
        </Link>
      ) : (
        <Box className="relative">
          <Box
            component="img"
            src={thumbnail}
            alt="thumbnail"
            className="w-full h-[216px] object-cover rounded-[20px]"
          />
          {/* Bookmark Icon */}
          {showBookmark ? (
            <Box className="absolute cursor-pointer top-2 right-2 bg-white p-[6px]">
              <Box
                component={"img"}
                src={ICON.DASHBOARD.VIDEOSTAR}
                alt="bookmark"
              />
            </Box>
          ) : (
            <Box className="absolute cursor-pointer top-2 right-2 bg-white p-[6px]">
              <Box
                component={"img"}
                src={ICON.DASHBOARD.STARFILLED}
                alt="bookmark"
              />
            </Box>
          )}
          {/* Duration */}
          {duration && !live && (
            <Box className="absolute bottom-3 right-2 bg-primary-main text-white-main text-[11px] px-2 w-[45px] h-[16px] rounded-[8px] flex justify-center items-center">
              {duration}
            </Box>
          )}

          {live && (
            <Box className="absolute bottom-3 right-2 bg-error-main text-white-main text-[11px] px-2 w-[63px] h-[16px] rounded-[8px] flex justify-center items-center">
              {live}
            </Box>
          )}
        </Box>
      )}

      {/* Video Info */}
      <Box className="flex justify-between">
        {/* Creator Info */}
        <Box className="flex items-start gap-2 mt-2 text-xs">
          <Avatar
            src={creator.avatar}
            alt={creator.name}
            className="w-[32px] h-[32px]"
          />
          <Box className="flex flex-col gap-1">
            {link ? (
              <Link
                key={data.id}
                to={link}
                className="focus:outline-none no-underline focus:ring-0 focus:border-none"
              >
                <Typography className="font-inter-medium truncate text-secondary-main">
                  {title}
                </Typography>
              </Link>
            ) : (
              <Typography className="font-inter-medium truncate text-secondary-main">
                {title}
              </Typography>
            )}

            <Typography className="text-[12px] font-inter-medium text-secondary-light">
              {creator.name}
            </Typography>
            <Typography className="text-[12px] font-inter-medium text-secondary-thin">
              {postedAt}
            </Typography>
          </Box>
        </Box>
        {/* Action Menu */}
        <Box className="right-0">
          <IconButton
            size="small"
            onClick={(e) => handleClick && handleClick(e)}
          >
            <Box
              component={"img"}
              src={ICON.DASHBOARD.VIDEODOT}
              alt="more options"
            />
          </IconButton>
        </Box>
      </Box>

      {/* Tags */}
      <Box className="relative mt-4">
        <Box className="flex gap-2 mt-3 overflow-x-auto flex-nowrap pe-4 no-scrollbar">
          {tags.map((tag) => (
            <Box
              key={tag}
              className="flex justify-center text-nowrap items-center bg-white-light h-[33px] text-primary-main font-inter-medium text-[12px] px-3 rounded-[8px]"
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

export default CommonCard;
