import React from "react";
import { AppButton, AppModal, CategoryButton } from "@components";
import type { ICategoryTagsModal } from "@types";
import { Box, IconButton, Typography } from "@mui/material";
import { POST_CATEGORIES, ICON } from "@constants";

const CategoryTagsModal: React.FC<ICategoryTagsModal> = ({
  open,
  onClose,
  categories,
  handleCategoryClick,
}) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[549px] rounded-xl sm:py-[2.875rem] sm:px-[2.5rem] p-[1.25rem]"
    >
      <Box>
        <Box className="flex justify-end w-full mr-0 lg:mr-16">
          <IconButton onClick={onClose}>
            <Box component="img" src={ICON.DASHBOARD.MODALCLOSE} alt="" />
          </IconButton>
        </Box>
        <Typography variant="h3">Add Category Tags</Typography>
        <Box className="flex flex-wrap sm:gap-3 gap-2 py-[2rem]">
          {POST_CATEGORIES.map((category) => {
            const { label, width } = category;
            return (
              <CategoryButton
                type={categories.includes(label) ? "primary" : "secondary"}
                className={`sm:${width}`}
                onClick={() => handleCategoryClick(label)}
              >
                {label}
              </CategoryButton>
            );
          })}
        </Box>
        <Box className="flex flex-col gap-4">
          <AppButton styleType="primary" onClick={onClose}>
            Save
          </AppButton>
          <AppButton styleType="bordered" onClick={onClose}>
            Cancel
          </AppButton>
        </Box>
      </Box>
    </AppModal>
  );
};

export default CategoryTagsModal;
