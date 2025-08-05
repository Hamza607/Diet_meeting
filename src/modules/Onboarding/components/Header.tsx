import React from "react";
import { Box, Typography } from "@mui/material";
import { ICON } from "@constants";

const Header: React.FC = () => {
  return (
    <Box className="bg-gradient-to-r from-primary-hard to-primary-light py-[1.375em] px-4">
      <Typography className="text-2xl font-inter-regular font-normal text-white-main flex justify-center items-center gap-2">
        <Box component="img" src={ICON.GLOBAL.LOGO_2} alt="logo" />
        <Box component="span">DietMeetings</Box>
      </Typography>
    </Box>
  );
};

export default Header;
