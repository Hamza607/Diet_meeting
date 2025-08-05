import React from "react";
import { Box } from "@mui/material";
import { ReviewCard } from "@profileComponents";
import { REVIEWS_DATA } from "@constants";

const Reviews: React.FC = () => {
  return (
    <Box>
      {REVIEWS_DATA.map((review, index) => {
        const { id, creator, date, text, image, title } = review;
        return (
          <ReviewCard
            key={index}
            id={id}
            avatar={creator.avatar}
            name={creator.name}
            date={date}
            text={text}
            image={image}
            title={title}
          />
        );
      })}
    </Box>
  );
};

export default Reviews;
