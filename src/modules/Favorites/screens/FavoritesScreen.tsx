import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Col, Row } from "antd";
import type { IFavoritesScreen } from "@types";
import { videosData } from "@constants";
import { CategoryButton, CommonCard } from "@components";
import { SuggestVideoPopup } from "@feedComponents";

const FavoritesScreen: React.FC<IFavoritesScreen> = ({
  activeCategory,
  handleCategoryClick,
  favoritesCategories,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <Fragment>
      
        <Box className="pt-[0.5em] pb-[1em]">
          <Typography variant="h1">Favorites</Typography>
          <Box className="mt-[1.5em] mb-[1em]">
            <Typography className="mb-[0.5em]">Categories</Typography>
            <Box className="flex flex-wrap sm:gap-4 gap-2">
              {favoritesCategories.map((item) => {
                const { id, label, className } = item;
                return (
                  <CategoryButton
                    key={id}
                    type={activeCategory === label ? "primary" : "secondary"}
                    className={className}
                    onClick={() => handleCategoryClick(label)}
                  >
                    {label}
                  </CategoryButton>
                );
              })}
            </Box>
          </Box>
          <Row gutter={[0, 24]}>
            {videosData.slice(0, 4).map((item) => {
              const {
                id,
                title,
                thumbnail,
                creator,
                duration,
                postedAt,
                tags,
              } = item;
              return (
                <Col key={id} lg={8} sm={12} xs={24}>
                  <CommonCard
                    title={title}
                    thumbnail={thumbnail}
                    creator={creator}
                    duration={duration}
                    postedAt={postedAt}
                    tags={tags}
                    showBookmark={false}
                    handleClick={handleClick}
                  />
                </Col>
              );
            })}
          </Row>
          <SuggestVideoPopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
        </Box>
    </Fragment>
  );
};

export default FavoritesScreen;
