import React, { Fragment } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { AppButton } from "@components";
import { ICON } from "@constants";
import type { IVideoPostHeaderProps } from "@types";

const VideoPostHeader: React.FC<IVideoPostHeaderProps> = ({
  categories,
  title,
  creator,
  postedAt,
  description,
  groupButtons,
  user,
}) => {
  return (
    <Fragment>
      <Box className="bg-white-main mt-5 rounded-lg">
        {/* Categories */}
        <Box className="flex gap-2 mb-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              className={`rounded-[8px] px-4 h-[33px] py-1 text-xs font-medium transition-all shrink-0  bg-white-light text-primary-main  `}
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* Title */}
        <Typography className="font-poppins-bold text-secondary-main text-[20px] mb-4">
          {title}
        </Typography>

        {/* Creator & Subscribe */}
        <Box className="md:flex justify-between items-center">
          <Box className="flex items-center gap-4 ">
            <Box className="flex items-center gap-2">
              <Avatar
                src={creator.avatar}
                alt={creator.name}
                className="w-[35px] h-[35px]"
              />
              <Box>
                <Typography className="font-inter-bold  relative top-1 text-gray-light text-[12px]">
                  {creator.name}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  className="font-inter-medium text-[12px] "
                >
                  {creator.subscribers} Subscribers
                </Typography>
              </Box>
            </Box>
            {user ? (
              " "
            ) : (
              <AppButton className="!w-[175px] !h-[35px]">
                <Box className="flex items-center gap-2">
                  <Box
                    src={ICON.CONTENTHUB.SUBSCRIBENOTIFICATION}
                    component={"img"}
                    className="w-[20px] h-[20px]"
                  />
                  Subscribe
                </Box>
              </AppButton>
            )}
          </Box>
          {/* Share & Report */}
          <Box className="flex gap-2 mt-2 md:mt-0">
            {groupButtons.map((button: any, index: number) => {
              const shouldUseBordered = String(button.label) == "100";
              return (
                <AppButton
                  key={index}
                  onClick={button.onClickHandle}
                  styleType={shouldUseBordered ? undefined : "bordered"}
                  className={`  ${button.classname}  `}
                >
                  <Box className="flex items-center gap-2">
                    <Box
                      component={"img"}
                      src={button.icon}
                      className="w-[20px] h-[20px]"
                    ></Box>
                    <Typography
                      className={`font-inter-medium md:block hidden ${
                        shouldUseBordered
                          ? "text-white-main"
                          : "text-primary-main"
                      } text-[16px]`}
                    >
                      {button.label}
                    </Typography>
                  </Box>
                </AppButton>
              );
            })}
          </Box>
        </Box>
        {/* Date & Description */}
        <Box>
          <Typography className="mt-4 mb-0 font-inter-medium text-[12px] text-secondary-thin">
            {postedAt}
          </Typography>
          <Typography className="mb-4 font-inter-regular text-[12px] text-secondary-main">
            {description}
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};

export default VideoPostHeader;
