import React, { useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ROUTES, videosData } from "@constants";
import { useAppContext } from "@context";
import Slider from "react-slick";
import { CommonCard } from "@components";
import { SuggestVideoPopup } from "@feedComponents";

const SuggestedVideos: React.FC = () => {
  const { isSearching } = useAppContext();
  const sliderRef = useRef<Slider | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

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

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <Box className="w-full  p-5 ">
      {/* Header */}
      <Box className="flex justify-between items-center mb-2 w-full">
        {isSearching ? null : (
          <Box className="flex items-center justify-between gap-2 w-full">
            <Typography className="text-[16px] font-inter-bold text-secondary-main">
              Suggested Videos
            </Typography>
            <IconButton
              className="text-primary-main"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* <Box className="flex flex-wrap lg:flex-nowrap gap-4 md:gap-4 overflow-x-auto no-scrollbar"> */}
      {/* Slider Section */}
      <Slider ref={sliderRef} {...sliderSettings}>
        {videosData.map((video) => (
          <CommonCard
            key={video.id}
            link={`${ROUTES.DASHBOARD_UPLOADED_CONTENT_VIEWER.replace(
              ":id",
              String(video.id)
            )}`}
            thumbnail={video.thumbnail}
            duration={video.duration}
            title={video.title}
            creator={video.creator}
            postedAt={video.postedAt}
            tags={video.tags}
            data={{ id: video.id }}
            showBookmark={video.showBookmark}
            handleClick={handleClick}
            
          />
        ))}
      </Slider>
      <SuggestVideoPopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
      {/* </Box> */}
    </Box>
  );
};

export default SuggestedVideos;
