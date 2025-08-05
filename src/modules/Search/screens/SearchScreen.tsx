import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { FiltersSearching, SearchingCard } from "@searchComponents";
import { useAppContext } from "@context";
import { SuggestedCoaches, UpcomingMeetings } from "@feedComponents";

const SearchScreen: React.FC = () => {
  const { isSearching } = useAppContext();
  return (
    <Box className="flex flex-col gap-4 md:mt-0 mt-4">
      {isSearching ? (
        <Fragment>
          <FiltersSearching />
          <SuggestedCoaches />
          <UpcomingMeetings />
          <SearchingCard />
        </Fragment>
      ) : null}
    </Box>
  );
};

export default SearchScreen;
