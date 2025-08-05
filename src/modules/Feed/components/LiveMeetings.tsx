import React, { Fragment, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { liveVideosData, ROUTES } from "@constants";
import { useAppContext } from "@context";
import Slider from "react-slick";
import { CommonCard } from "@components";
import { SuggestVideoPopup } from "@feedComponents";

const LiveMeetings: React.FC = () => {
  const { isSearching } = useAppContext();
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
    <Box className="w-full p-5 ">
      {/* Header */}
      <Box className="flex justify-between items-center mb-2">
        {isSearching ? null : (
          <Fragment>
            <Typography className="text-[16px] font-inter-bold text-secondary-main">
              Live Meetings
            </Typography>
            <IconButton
              className="text-primary-main"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Fragment>
        )}
      </Box>

      {/* Scrollable Cards */}
      {/* <Box className="flex flex-wrap lg:flex-nowrap gap-4 md:gap-4 overflow-x-auto no-scrollbar"> */}
      <Slider ref={sliderRef} {...sliderSettings}>
        {liveVideosData.map((video) => (
          <CommonCard
            link={`${ROUTES.DASHBOARD_RECORDED_CONTENT_VIEWER.replace(
              ":id",
              String(video.id)
            )}`}
            key={video.id}
            data={{ id: video.id }}
            thumbnail={video.thumbnail}
            live={video.live}
            title={video.title}
            creator={video.creator}
            tags={video.tags}
            showBookmark={video.showBookmark}
            handleClick={handleClick}
            liveMeeting={false}
          />
        ))}
      </Slider>
      {/* </Box> */}
      <SuggestVideoPopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
    </Box>
  );
};

export default LiveMeetings;
