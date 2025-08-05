import React, { Fragment, useRef } from "react";
import Slider from "react-slick";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  LIVEMEETING_SORT_OPTIONS,
  liveVideosData,
  meetings,
  ROUTES,
} from "@constants";
import {
  AppCategoriesSection,
  CategoryButton,
  CommonCard,
  CommonMeetingCard,
} from "@components";
import type { ILiveMeeting } from "@types";
import { SuggestVideoPopup, UpcomingMeetingPopup } from "@feedComponents";

const LiveMeetingScreen: React.FC<ILiveMeeting> = ({
  sortBy,
  anchorEl,
  setAnchorEl,
  anchorEl2,
  setAnchorEl2,
  sliderSettings,
  handleSelectSortBy,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  return (
    <Fragment>
      <Box className="flex flex-col gap-4">
        <Typography className="text-secondary-main text-[20px] lg:text-[48px] font-poppins-bold">
          Live Meetings
        </Typography>
        {/* Categories */}
        <Box>
          <AppCategoriesSection title />
        </Box>
        {/* sortOptions */}
        {/* <Box>
        <Typography className="text-[14px] font-inter-medium mb-2 text-gray-700">
        Sort By
        </Typography>
        <CommonFilterScroll
        items={sortOptions}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        />
        </Box> */}
        <Box className="sm:my-7 mt-4">
          <Typography className="mb-2">Sort By</Typography>
          <Box className="flex items-center flex-wrap sm:gap-4 gap-2">
            {LIVEMEETING_SORT_OPTIONS.map((option) => {
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
        {/* Upcoming Meetings */}
        <Box className="w-full bg-white-light p-5 rounded-[12px] mt-3">
          <Box className="flex justify-between items-center mb-4">
            <Typography className="text-[16px] font-inter-bold text-secondary-main">
              Upcoming Meetings
            </Typography>
            <IconButton
              className="text-primary-main"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
          <Slider ref={sliderRef} {...sliderSettings}>
            {meetings.map((meeting, index) => (
              <CommonMeetingCard
                key={meeting.id}
                id={meeting.id}
                isRemindable={meeting.isRemindable}
                date={meeting.date}
                title={meeting.title}
                creator={meeting.creator}
                tags={meeting.tags}
                showBorder={index < meetings.length - 1}
                handleClick={(e: any) => setAnchorEl(e.currentTarget)}
              />
            ))}
          </Slider>
          <UpcomingMeetingPopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
        </Box>

        {/* /// live videos /// */}
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mt-3 overflow-x-auto no-scrollbar">
          {liveVideosData.map((video) => (
            // <Link
            //   key={video.id}
            //   to={`${ROUTES.DASHBOARD_LIVE_MEETINGS_VIEWER.replace(
            //     ":id",
            //     String(video.id)
            //   )}`}
            //   className="focus:outline-none focus:ring-0 focus:border-none"
            // >
            <CommonCard
              key={video.id}
              link={`${ROUTES.DASHBOARD_LIVE_MEETINGS_VIEWER.replace(
                ":id",
                String(video.id)
              )}`}
              thumbnail={video.thumbnail}
              live={video.live}
              title={video.title}
              creator={video.creator}
              tags={video.tags}
              starFilled={true}
              data={{ id: video.id }}
              liveMeeting={false}
              handleClick={(e: any) => setAnchorEl2(e.currentTarget)}
            />
            // </Link>
          ))}
        </Box>
        <SuggestVideoPopup setAnchorEl={setAnchorEl2} anchorEl={anchorEl2} />
      </Box>
    </Fragment>
  );
};

export default LiveMeetingScreen;
