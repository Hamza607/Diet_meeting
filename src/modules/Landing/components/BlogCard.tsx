import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import type { IBlogCard } from "@types";
import { ROUTES } from "@constants";

const BlogCard: React.FC<IBlogCard> = ({ image, date, title, description }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box className="bg-white-main rounded-xl overflow-hidden">
      <Box component="img" src={image} alt="" className="w-full h-[233px]" />
      <Box className="px-[1.75em] py-[1em]">
        <Typography className="text-xs text-secondary-thin">{date}</Typography>
        <Typography className="text-2xl font-poppins-bold font-bold mt-[0.5em] mb-[0.875em]">
          {title}
        </Typography>
        <Typography className="">{description}</Typography>
        <Link
          to={ROUTES.BLOG_DETAILS}
          className="font-inter-semibold font-semibold !text-primary-main mt-[1.5em] inline-block underline"
          onClick={scrollToTop}
        >
          Read more
        </Link>
      </Box>
    </Box>
  );
};

export default BlogCard;
