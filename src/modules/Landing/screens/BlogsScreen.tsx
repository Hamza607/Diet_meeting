import React from "react";
import { Box, Typography } from "@mui/material";
import { Col, Row } from "antd";
import { BLOGS_DATA } from "@constants";
import { BlogCard } from "@landingComponents";

const BlogsScreen: React.FC = () => {
  return (
    <Box className="px-[1em] md:py-[8em] sm:py-[5em] py-[3em] bg-white-light">
      <Typography variant="h1" className="mb-[2em] text-center">
        Blogs and News
      </Typography>
      <Box className="w-full max-w-[1320px] mx-auto">
        <Row gutter={[{ md: 30 }, 32]}>
          {BLOGS_DATA.map((item, index) => {
            const { id, date, image, title, description } = item;
            return (
              <Col key={index} lg={8} md={12} xs={24} id={id}>
                <BlogCard
                  image={image}
                  date={date}
                  title={title}
                  description={description}
                />
              </Col>
            );
          })}
        </Row>
      </Box>
    </Box>
  );
};

export default BlogsScreen;
