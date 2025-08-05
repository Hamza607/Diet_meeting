import React from "react";
import { Box } from "@mui/material";
import { videosData } from "@constants";
import { CommonCard } from "@components";
import { SuggestVideoPopup } from "@feedComponents";

const SearchingCard: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  return (
    <Box className="flex flex-col gap-4 w-full">
      <Box className="grid lg:grid-cols-3 md:grid-cols-2 flex-wrap lg:flex-nowrap gap-4 md:gap-4 overflow-x-auto no-scrollbar">
        {videosData.map((video) => (
          <CommonCard
            key={video.id}
            thumbnail={video.thumbnail}
            duration={video.duration}
            title={video.title}
            creator={video.creator}
            postedAt={video.postedAt}
            tags={video.tags}
            showBookmark={video.showBookmark}
            handleClick={(e) => setAnchorEl(e.currentTarget)}
          />
        ))}
      </Box>
      <SuggestVideoPopup anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
};

export default SearchingCard;
