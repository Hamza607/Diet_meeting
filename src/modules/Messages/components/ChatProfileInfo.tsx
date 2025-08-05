import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import type { IChatProfileInfo } from "@types";
import { useAppContext } from "@context";
import { ICON, ROUTES } from "@constants";
import { CategoryButton } from "@components";

const ChatProfileInfo: React.FC<IChatProfileInfo> = ({ avatar, username }) => {
  const navigate = useNavigate();
  const { handleReportModalOpen } = useAppContext();
  return (
    <Box className="flex items-center md:gap-4 gap-2 sticky top-0 bg-white-main py-1 lg:pl-[1.5em] sm:pl-2 pl-1">
      <IconButton
        className="lg:hidden"
        onClick={() => navigate(ROUTES.DASHBOARD_MESSAGES)}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Box
        component="img"
        src={avatar}
        alt=""
        className="w-[35px] h-[35px] rounded-full"
      />
      <Typography className="text-[15px] font-inter-bold font-bold">
        {username}
      </Typography>
      <CategoryButton
        type="secondary"
        className="lg:w-[104px] h-[35px] gap-2 text-base"
      >
        <BlockIcon className="text-[1.125em]" />
        <Box component="span" className="lg:inline-block hidden">
          Block
        </Box>
      </CategoryButton>
      <CategoryButton
        type="secondary"
        className="lg:w-[110px] h-[35px] gap-2 text-base"
      >
        <Box component="img" src={ICON.PROFILE.REPORT_ICON} alt="" />
        <Box
          component="span"
          className="lg:inline-block hidden"
          onClick={handleReportModalOpen}
        >
          Report
        </Box>
      </CategoryButton>
    </Box>
  );
};

export default ChatProfileInfo;
