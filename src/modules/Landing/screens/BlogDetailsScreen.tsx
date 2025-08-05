import React from "react";
import { Box, Typography } from "@mui/material";
import { IMG } from "@constants";

const BlogDetailsScreen: React.FC = () => {
  return (
    <Box className="px-[1em] md:py-[8em] sm:py-[5em] py-[3em] bg-white-light w-full">
      <Box className="w-full max-w-[1062px] mx-auto">
        <Typography
          variant="h1"
          className="lg:text-[2.5em]/10 sm:text-2xl text-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography className="text-sm font-inter-bold font-bold text-secondary-light mt-5 mb-8">
          August 5th, 2024
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.
        </Typography>
      </Box>
      <Box className="w-full max-w-[1105px] mx-auto sm:mt-[8em] mt-[4em]">
        <Box
          component="img"
          src={IMG.LANDING.BLOG_2}
          alt=""
          className="w-full h-full"
        />
      </Box>
    </Box>
  );
};

export default BlogDetailsScreen;
