import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CategoryButton } from "@components";
import { SEARCH_SORT_OPTIONS, CONTENT_TYPE_OPTIONS } from "@constants";
import { AppCategoriesSection } from "@components";

const FiltersSearching: React.FC = () => {
  // const [selectedCategory, setSelectedCategory] = useState<string[]>(["All"]);
  const [sortBy, setSortBy] = useState<string>("Relevance");

  // const handleSelectCategory = (category: string) => {
  //   setSelectedCategory((prev) =>
  //     prev.includes(category)
  //       ? prev.filter((c) => c !== category)
  //       : [...prev, category]
  //   );
  // };
  const handleSelectSortBy = (sortBy: string) => {
    setSortBy(sortBy);
  };
  return (
    <Box className="flex flex-col gap-4 w-full">
      {/* Content Type */}
      <Box>
        <Box>
          <Typography className="mb-2">Content Type</Typography>
          <Box className="flex items-center sm:gap-4 gap-2 flex-wrap ">
            {CONTENT_TYPE_OPTIONS.map((option) => {
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
      </Box>

      {/* Categories with Scroll */}
      <Box>
        {/* <Typography className="text-[14px] font-inter-medium mb-2 text-gray-700">
          Categories
        </Typography>

        <AppFilterScroll
          items={FILTER_CATEGORIES}
          selected={selectedCategory}
          onSelect={handleSelectCategory}
        /> */}
        <AppCategoriesSection title={true} />
      </Box>

      <Box className="sm:my-7 mt-4">
        <Typography className="mb-2">Sort By</Typography>
        <Box className="flex items-center sm:gap-4 gap-2">
          {SEARCH_SORT_OPTIONS.map((option) => {
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
    </Box>
  );
};

export default FiltersSearching;
