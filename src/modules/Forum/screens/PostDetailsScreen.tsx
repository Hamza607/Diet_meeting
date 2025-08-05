import React from "react";
import { Box, IconButton, Input } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import type { IPostDetailsScreen } from "@types";
import { COMMENTS_DATA, ICON, ROUTES } from "@constants";
import { CommentBox } from "@components";
import { PostCard } from "@forumComponents";

const PostDetailsScreen: React.FC<IPostDetailsScreen> = ({ navigate }) => {
  return (
    <Box>
      <IconButton className="mb-[2em]">
        <ChevronLeftIcon
          className="text-3xl text-primary-main cursor-pointer"
          onClick={() => navigate(ROUTES.DASHBOARD_FORUM)}
        />
      </IconButton>
      <Box className="sm:pr-[3.5rem]">
        <PostCard id="post-details" />
      </Box>
      <Box className="md:pl-5 md:pr-10 sm:mt-[3rem] mt-[2rem]">
        <Box className="flex items-center gap-5">
          <Box
            component="img"
            src={"https://randomuser.me/api/portraits/men/32.jpg"}
            alt=""
            className="w-[36px] h-[36px] rounded-full"
          />
          <Input
            placeholder="Add a comment"
            className="w-full max-w-[560px] h-[44px] before:!hidden after:!hidden !bg-white-strong !border-[1px] !border-solid !border-secondary-light !rounded-[4px] px-[1rem]"
            inputProps={{
              className:
                "!border-none text-sm font-inter-medium font-medium text-secondary-main",
            }}
          />
          <IconButton className="w-[42px] h-[42px] rounded-full !bg-secondary-light flex justify-center items-center p-0">
            <Box component="img" src={ICON.DASHBOARD.SEND_ICON} alt="" />
          </IconButton>
        </Box>
        <Box className="mt-[2rem]">
          <Box className="mb-3">
            {COMMENTS_DATA.map((item, index) => {
              const { id, avatar, username, time, comment, replies } = item;
              return (
                <CommentBox
                  key={index}
                  id={id}
                  avatar={avatar}
                  username={username}
                  time={time}
                  comment={comment}
                  replies={replies}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostDetailsScreen;
