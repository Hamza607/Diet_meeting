import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import { Col, Collapse, Row } from "antd";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import type { IHomeScreen } from "@types";
import {
  HOME_BLOGS_DATA,
  HOME_FAQ_ITEMS,
  HOME_HOW_IT_WORKS_DATA,
  HOME_LIVE_MEETINGS_DATA,
  IMG,
  ROUTES,
  VIDEO,
} from "@constants";
import { BlogCard, MeetingCard, WorkCard } from "@landingComponents";

const HomeScreen: React.FC<IHomeScreen> = ({
  scrollToHowItWorks,
  howItWorksRef,
  scrollToTop,
  sliderSettings,
  navigate,
  panelStyle,
  activeKey,
  setActiveKey,
}) => {
  return (
    <Box>
      <Box className="relative w-full h-[80vh]">
        <Box
          component={"video"}
          autoPlay
          muted
          loop
          controls={false}
          className="w-full h-full object-none z-[0]"
        >
          <source src={VIDEO.LANDING.HOME_SCREEN_VIDEO} type="video/mp4" />
        </Box>
        <Box className="bg-gradient-to-r from-primary-hard to-primary-light absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%-40px)] max-w-[975px] py-[2em] sm:px-[1.5em] px-[1em] text-center rounded-xl z-[9]">
          <Typography className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl !leading-[1.25] font-inter-extrabold text-white-main">
            A Meeting Place for Every Diet and Every Journey!
          </Typography>
          <Typography
            variant="h6"
            className="sm:text-xl text-base font-inter-regular font-normal leading-[1.25] text-white-main w-full max-w-[720px] mx-auto mt-[1em] mb-[2.5em]"
          >
            Connect with experts, track your progress, and find support from a
            community that understands your goals.
          </Typography>
          <Box className="flex justify-center items-center sm:gap-[2em] gap-[1em]">
            <Button
              className="sm:w-[220px] w-[118px] h-auto sm:min-h-[53px] min-h-[32px] py-[0.25em] sm:px-[1em] px-[0.5em] sm:text-base text-sm font-inter-medium rounded-lg bg-white-main border border-white-main text-primary-main"
              onClick={scrollToHowItWorks}
            >
              How it Works
            </Button>
            <Button
              className="sm:w-[220px] w-[118px] h-auto sm:min-h-[53px] min-h-[32px] py-[0.25em] sm:px-[1em] px-[0.5em] sm:text-base text-sm font-inter-medium rounded-[5px] bg-transparent border-[1px] border-solid border-white-main text-white-main"
              onClick={() => navigate(ROUTES.SIGNUP)}
            >
              Start free trial
            </Button>
          </Box>
        </Box>
        <Box className="absolute top-0 left-0 w-full h-full bg-primary-dim z-[1]"></Box>
      </Box>
      <Box ref={howItWorksRef} className="my-[6em]">
        <Typography variant="h1" className="text-center sm:text-5xl text-2xl">
          How It Works
        </Typography>
        <Typography className="text-secondary-thin text-center mt-[1.5em] mb-[5em]">
          Build And Explore your community
        </Typography>
        <Box className="w-full max-w-[1100px] mx-auto px-[1.5em]">
          <Row
            gutter={[
              { xl: 105, md: 80 },
              { md: 40, sm: 60, xs: 80 },
            ]}
          >
            {HOME_HOW_IT_WORKS_DATA.map((item, index) => {
              const { id, image, title, description } = item;
              return (
                <Col lg={8} md={12} xs={24} key={index} id={id}>
                  <WorkCard
                    image={image}
                    title={title}
                    description={description}
                  />
                </Col>
              );
            })}
          </Row>
        </Box>
      </Box>
      <Box className="bg-white-light sm:py-[6em] py-[3em]">
        <Box className="px-[1em]">
          <Typography variant="h1" className="sm:text-5xl text-2xl text-center">
            Live Meetings
          </Typography>
          <Typography className="text-secondary-light text-center w-full max-w-[625px] mx-auto mt-[1em] mb-[5em]">
            Join live interactive sessions hosted by community members. Connect,
            share experiences, and get the support you need on your health
            journey.
          </Typography>
        </Box>
        <Box className="mt-[2em] sm:w-[calc(100%-60px)] w-[calc(100%-16px)] ml-auto">
          <Slider {...sliderSettings}>
            {HOME_LIVE_MEETINGS_DATA.map((item, index) => {
              const { id, image, title, description } = item;
              return (
                <MeetingCard
                  key={index}
                  id={id}
                  image={image}
                  title={title}
                  description={description}
                />
              );
            })}
          </Slider>
        </Box>
      </Box>
      <Box className="bg-white-light sm:pt-[6em] pt-[3em] pb-[3em] md:px-[2.5em] px-[1em]">
        <Typography
          variant="h1"
          className="sm:text-5xl text-2xl text-center mb-[2em]"
        >
          Blogs and News
        </Typography>
        <Row
          gutter={[
            { xl: 40, md: 24 },
            { lg: 0, sm: 24, xs: 24 },
          ]}
        >
          {HOME_BLOGS_DATA.map((item, index) => {
            const { id, date, image, title, description } = item;
            return (
              <Col lg={8} md={12} xs={24} key={index} id={id}>
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
      <Box className="sm:py-[6em] py-[3em] px-[0.5em]">
        <Row gutter={[{ lg: 70, md: 20, xs: 8 }, 0]} className="items-center">
          <Col sm={12} xs={7} className="sm:text-end text-start">
            <Box
              component="img"
              src={IMG.LANDING.ABOUT_US}
              alt=""
              className="w-full max-w-[575px]"
            />
          </Col>
          <Col sm={12} xs={15}>
            <Box className="w-full max-w-[510px]">
              <Typography
                variant="h6"
                className="sm:text-xl text-base sm:font-poppins-bold sm:font-bold font-poppins-medium font-medium text-secondary-light"
              >
                About Us
              </Typography>
              <Typography
                variant="h1"
                className="mt-[0.375em] mb-[0.75em] sm:text-5xl text-2xl"
              >
                A Note from Diet Meetings
              </Typography>
              <Link
                to={ROUTES.ABOUT_US}
                className="flex !text-primary-main sm:leading-[1.8em] leading-[1.25em] sm:text-base text-sm font-inter-medium font-medium"
                onClick={scrollToTop}
              >
                Learn more about our Journey
                <KeyboardArrowRightIcon className="sm:text-[2em] text-[1.25em] sm:ml-3" />
              </Link>
            </Box>
          </Col>
        </Row>
      </Box>
      <Box className="pt-[4em] pb-[8em] bg-white-light">
        <Typography variant="h1" className="mb-[0.75em] text-center px-[1em]">
          Frequently Asked Questions
        </Typography>
        <Box className="px-[1em] mb-[6em]">
          <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
              <Box
                className={`sm:w-[50px] sm:h-[50px] w-[32px] h-[32px] rounded-full bg-white-hard basic-shadow flex items-center justify-center`}
              >
                <ArrowBackIosNewIcon
                  className={`text-secondary-main sm:text-2xl text-base ${
                    isActive ? "rotate-90" : "rotate-[-90deg]"
                  }`}
                />
              </Box>
            )}
            expandIconPosition="end"
            items={HOME_FAQ_ITEMS(panelStyle)}
            activeKey={activeKey}
            onChange={setActiveKey}
          />
        </Box>
        <Box className="sm:flex items-center justify-between gap-[1em] sm:py-[6em] py-[3em] bg-white-main lg:px-[4em] px-[1em]">
          <Typography variant="h1">Start your journey today!</Typography>
          <Button
            className="md:w-[230px] w-[118px] h-auto md:min-h-[52px] min-h-[32px] rounded-lg bg-primary-strong text-base font-inter-medium font-medium text-white-main sm:mt-0 mt-4"
            onClick={() => navigate(ROUTES.SIGNUP)}
          >
            Start Today
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
