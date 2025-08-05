import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { FILTER_CATEGORIES } from "@constants";
import { CategoryButton } from "@components";
import { useAppContext } from "@context";
import type { IAppCategoriesSection } from "@types";

const AppCategoriesSection: React.FC<IAppCategoriesSection> = ({ title }) => {
  const { categories, handleSelectCategories } = useAppContext();
  return (
    <Fragment>
      {title && <Typography className="mb-2">Categories</Typography>}
      <Box className="flex items-center flex-wrap sm:gap-4 gap-2">
        {FILTER_CATEGORIES.map((option) => {
          const { id, className, label } = option;
          return (
            <CategoryButton
              key={id}
              className={className}
              type={categories.includes(label) ? "primary" : "secondary"}
              onClick={() => handleSelectCategories(label)}
            >
              {label}
            </CategoryButton>
          );
        })}
      </Box>
    </Fragment>
  );
};

export default AppCategoriesSection;
