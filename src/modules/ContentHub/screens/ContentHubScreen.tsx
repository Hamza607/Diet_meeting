import { Box, Typography } from "@mui/material";
import { ICON } from "@constants";
import { ContentHubTable } from "@contentHubComponents";
import { Fragment, useState } from "react";

const ContentHubScreen = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  return (
    <Fragment>
      <Box className="flex gap-4 items-center mt-4 md:mt-0">
        <Box
          component={"img"}
          className="w-[190px] h-[190px] "
          src={ICON.CONTENTHUB.USERIMAGE}
        />
        <Typography variant="h1" className="mb-7 mt-4 md:mt-0">
          John Baer
        </Typography>
      </Box>
      <Box className="my-4">
        <ContentHubTable setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
        {/* <ContentHubTablePopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} /> */}
      </Box>
    </Fragment>
  );
};

export default ContentHubScreen;
