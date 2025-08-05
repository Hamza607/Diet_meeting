import React from "react";
import { Box, Typography } from "@mui/material";
import { Col, Row } from "antd";
import type { IRestrictionsScreen } from "@types";
import { RESTRICTION_CARDS_DATA } from "@constants";
import { RestrictionCard } from "@onboardingComponents";
import { AppButton } from "@components";

const RestrictionsScreen: React.FC<IRestrictionsScreen> = ({
  categories,
  handleCategoryClick,
  handleNextButton,
  handleBackButton,
  handleSkipButton,
}) => {
  return (
    <Box className="w-full max-w-[1130px] h-auto min-h-[calc(100vh-165px)] mx-auto px-[1em] py-[3em]">
      <Typography
        variant="h1"
        className="xl:text-5xl md:text-4xl text-2xl lg:text-left text-center text-secondary-hard mb-[.875em] md:!leading-[3.25rem]"
      >
        Diet Type and Restrictions
      </Typography>
      <Box
        className={`w-full h-full px-[1em] py-[1.75em] bg-white-main basic-shadow rounded-xl mb-6`}
      >
        <Typography className="text-xl font-poppins-bold font-bold mb-7 text-center">
          Select preferred categories
        </Typography>
        <Row gutter={[{ sm: 22 }, 24]}>
          {RESTRICTION_CARDS_DATA.map((item, index) => {
            const { id, image, title, description } = item;
            return (
              <Col key={index} sm={12} xs={24}>
                <RestrictionCard
                  key={id}
                  image={image}
                  title={title}
                  description={description}
                  active={categories.includes(title)}
                  handleClick={() => handleCategoryClick(title)}
                />
              </Col>
            );
          })}
        </Row>
      </Box>
      <AppButton onClick={handleNextButton}>Next</AppButton>
      <AppButton
        styleType="bordered"
        className="my-5"
        onClick={handleBackButton}
      >
        Back
      </AppButton>
      <AppButton styleType="text" onClick={handleSkipButton}>
        Skip
      </AppButton>
    </Box>
  );
};

export default RestrictionsScreen;
