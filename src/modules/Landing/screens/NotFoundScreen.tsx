import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@constants";

const NotFoundScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="h-auto min-h-[91vh] flex items-center justify-center bg-white-light px-3">
      <Box className="text-center w-full">
        <Typography
          variant="h1"
          className="lg:text-[350px] sm:text-[250px] text-[128px] font-inter-extrabold font-extrabold text-secondary-main"
        >
          404
        </Typography>
        <Typography className="text-secondary-light mb-[3em]">
          Oops! This page cannot be found.
        </Typography>
        <Button
          className="sm:w-[230px] w-full h-[52px] !bg-primary-main !border-primary-main rounded-[5px] !text-white-main text-lg font-medium font-inter-medium !shadow-none"
          onClick={() => navigate(ROUTES.ROOT)}
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundScreen;
