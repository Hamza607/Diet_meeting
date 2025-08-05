import React, { useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { meetings } from "@constants";
import Slider from "react-slick";
import { CommonMeetingCard } from "@components";
import { UpcomingMeetingPopup } from "@feedComponents";

const UpcomingMeetings: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Box className="w-full bg-white-light p-5 rounded-[12px] mt-6">
      {/* Header */}
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

      {/* Scrollable meeting cards */}
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
            handleClick={handleClick}
            
          />
        ))}
      </Slider>
      <UpcomingMeetingPopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
    </Box>
  );
};

export default UpcomingMeetings;
