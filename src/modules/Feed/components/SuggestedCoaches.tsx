import React, { useRef } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { coaches, ICON } from "@constants";
import { useAppContext } from "@context";
import Slider from "react-slick";
import { AppButton } from "@components";

const SuggestedCoaches: React.FC = () => {
  const { isSearching } = useAppContext();
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: false },
      },
      {
        breakpoint: 720,
        settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: false },
      },
      {
        breakpoint: 580,
        settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false },
      },

      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false },
      },
    ],
  };

  return (
    <Box className="w-full px-5 pt-5">
      <Box className="flex justify-between items-center mb-2">
        <Typography className="text-[16px] font-inter-bold text-secondary-main mb-3">
          {isSearching ? "Coaches" : "Suggested Coaches"}
        </Typography>
        <IconButton
          className="text-primary-main"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box className="slider-container">
        <Slider ref={sliderRef} {...sliderSettings}>
          {coaches.map((coach, index) => (
            <Box key={index} className="px-0">
              <Box className="w-[160px] min-h-[241px] bg-white-light rounded-[12px] p-3 flex flex-col justify-between items-center">
                <Typography className="text-sm h-4 text-primary-main font-inter-medium">
                  {coach.isNew && "New"}
                </Typography>

                {/* Center Avatar + Name */}
                <Box className="flex flex-col items-center justify-center flex-1 mt-2 mb-4">
                  <Avatar
                    src={coach.avatar}
                    alt={coach.firstName + " " + coach.lastName}
                    className="mb-2 h-[80px] w-[80px]"
                  />
                  <Box>
                    <Typography className="text-[16px] font-inter-bold text-secondary-main text-center">
                      {coach.firstName}
                    </Typography>
                    <Typography className="text-[16px] font-inter-bold text-secondary-main text-center">
                      {coach?.lastName}
                    </Typography>
                  </Box>
                </Box>

                {/* Subscribe Button */}
                {coach.isNew ? (
                  <AppButton className="!h-[35px]">
                    {" "}
                    <Box className="flex items-center gap-[8px]">
                      <Box
                        component={"img"}
                        src={ICON.SUGGESTVIDEO.NOTIFICATIONBELL}
                        className="w-[20px] h-[20px]"
                      />

                      <Typography className="font-inter-medium text-white-main text-[16px] ">
                        {" "}
                        Subscribe
                      </Typography>
                    </Box>
                  </AppButton>
                ) : (
                  <AppButton styleType="bordered" className="!h-[35px]">
                    {" "}
                    <Box className="flex items-center gap-[8px]">
                      <Box
                        component={"img"}
                        src={ICON.SUGGESTVIDEO.UNSUBSCRIBE_Plan}
                        className="w-[20px] h-[20px]"
                      />

                      <Typography className="font-inter-medium text-primary-main text-[16px] ">
                        {" "}
                        Unsubscribe
                      </Typography>
                    </Box>
                  </AppButton>
                )}
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default SuggestedCoaches;
