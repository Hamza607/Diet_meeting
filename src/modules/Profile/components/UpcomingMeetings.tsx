import React from "react";
import { Box } from "@mui/material";
import { MeetingCard } from "@profileComponents";
import { UPCOMING_MEETINGS_DATA } from "@constants";

const UpcomingMeetings: React.FC = () => {
  return (
    <Box>
      {UPCOMING_MEETINGS_DATA.map((item, index) => {
        const { id, date, title, creator } = item;
        return (
          <MeetingCard
            key={index}
            id={id}
            avatar={creator.avatar}
            date={date}
            title={title}
            name={creator.name}
          />
        );
      })}
    </Box>
  );
};

export default UpcomingMeetings;
