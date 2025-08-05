import React, { useState } from "react";
import { DashboardLayout } from "@layouts";
import { LiveMeetingScreen } from "@modules";

const LiveMeetingContainer: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("Relevance");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorEl2, setAnchorEl2] = useState<HTMLButtonElement | null>(null);
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
  const handleSelectSortBy = (sortBy: string) => {
    setSortBy(sortBy);
  };
  return (
    <DashboardLayout>
      <LiveMeetingScreen
        sortBy={sortBy}
        anchorEl={anchorEl}
        anchorEl2={anchorEl2}
        setSortBy={setSortBy}
        setAnchorEl={setAnchorEl}
        setAnchorEl2={setAnchorEl2}
        sliderSettings={sliderSettings}
        handleSelectSortBy={handleSelectSortBy}
      />
    </DashboardLayout>
  );
};

export default LiveMeetingContainer;
