import React from "react";
import { Box, Typography } from "@mui/material";
import { BsChat } from "react-icons/bs";
import type { IForumScreen } from "@types";
import { FORUM_SORT_OPTIONS, ROUTES } from "@constants";
import { AppButton, AppCategoriesSection, CategoryButton } from "@components";
import { PostCard } from "@forumComponents";

const ForumScreen: React.FC<IForumScreen> = ({
  navigate,
  sortBy,
  handleSelectSortBy,
}) => {
  return (
    <Box>
      <Box>
        <Box>
          <AppCategoriesSection title />
        </Box>
        <Box className="sm:my-7 mt-4">
          <Typography className="mb-2">Sort By</Typography>
          <Box className="flex items-center sm:gap-4 gap-2">
            {FORUM_SORT_OPTIONS.map((option) => {
              const { id, className, label } = option;
              return (
                <CategoryButton
                  key={id}
                  className={className}
                  type={sortBy === label ? "primary" : "secondary"}
                  onClick={() => handleSelectSortBy(label)}
                >
                  {label}
                </CategoryButton>
              );
            })}
          </Box>
        </Box>
        <Box className="text-end md:pr-[2.5rem]">
          <AppButton
            className="hidden sm:inline-block sm:max-w-[231px]"
            onClick={() => navigate(ROUTES.DASHBOARD_FORUM_NEW_POST)}
          >
            <BsChat className="mr-3 text-lg" />
            <Box component="span">Start Discussion</Box>
          </AppButton>
        </Box>
      </Box>
      <Box className="sm:mt-[3em] mt-[2em] md:pr-[3.5rem]">
        {["1", "2", "3"].map((sn, index) => (
          <PostCard
            key={index}
            id={sn}
            onClick={() => navigate(ROUTES.DASHBOARD_FORUM_POST_DETAILS)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ForumScreen;
