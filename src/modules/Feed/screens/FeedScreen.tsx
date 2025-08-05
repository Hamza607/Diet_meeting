import React, { Fragment } from "react";
import { Box } from "@mui/material";
import {
  Progress,
  SuggestedCoaches,
  SuggestedVideos,
  UpcomingMeetings,
  LiveMeetings,
} from "@feedComponents";
import { AppCategoriesSection } from "@components";

const FeedScreen: React.FC = () => {
  return (
    <Box className="flex flex-col gap-4">
      {/* Conditional rendering based on search state */}

      <Fragment>
        <Progress />
        <Box className="sm:my-7 mt-4">
          <AppCategoriesSection title={false} />
        </Box>
        <SuggestedCoaches />
        <SuggestedVideos />
        <UpcomingMeetings />
        <LiveMeetings />
      </Fragment>
    </Box>
  );
};

export default FeedScreen;
