import React from "react";
import { Box, Typography } from "@mui/material";
import type { IProfileInfo } from "@types";
import { useAppContext } from "@context";
import { ICON } from "@constants";
import { CategoryButton } from "@components";

const ProfileInfo: React.FC<IProfileInfo> = ({
  handleChangeAddressModalOpen,
  handleChangeLinksModalOpen,
}) => {
  const { handleReportModalOpen, handleShareClick } = useAppContext();
  return (
    <Box>
      <Box className="flex items-center gap-3">
        <Box
          component="img"
          src={"https://randomuser.me/api/portraits/men/32.jpg"}
          alt=""
          className="w-full max-w-[190px] rounded-full"
        />
        <Box>
          <Typography variant="h1">John Baer</Typography>
          <Box className="flex items-center gap-2 mt-2">
            <Box component="img" src={ICON.PROFILE.LOCATION_ICON} alt="" />
            <Typography>Pearl River, NY</Typography>
            <Box
              component="img"
              src={ICON.PROFILE.EDIT_ICON}
              alt=""
              className="cursor-pointer"
              onClick={handleChangeAddressModalOpen}
            />
          </Box>
          <Box className="flex items-start gap-2 mt-4">
            <Box>
              <Typography className="font-inter-semibold font-semibold underline cursor-pointer">
                instagram.com/jhonbaer
              </Typography>
              <Typography className="font-inter-semibold font-semibold underline cursor-pointer">
                tiktok.com/jhonbaer
              </Typography>
              <Typography className="font-inter-semibold font-semibold underline cursor-pointer">
                amazon.com/jhonbaer
              </Typography>
            </Box>
            <Box
              component="img"
              src={ICON.PROFILE.EDIT_ICON}
              alt=""
              className="cursor-pointer"
              onClick={handleChangeLinksModalOpen}
            />
          </Box>
        </Box>
      </Box>
      <Box className="mt-8 flex items-center sm:gap-4 gap-2">
        <CategoryButton type="secondary" className="w-[157px] h-[35px] gap-2">
          <Box component="img" src={ICON.PROFILE.SUBSCRIBE_ICON} alt="" />
          <Box component="span" className="sm:inline-block hidden">
            Subscribe
          </Box>
        </CategoryButton>
        <CategoryButton type="secondary" className="w-[157px] h-[35px] gap-2">
          <Box component="img" src={ICON.PROFILE.MESSAGE_ICON} alt="" />
          <Box component="span" className="sm:inline-block hidden">
            Message
          </Box>
        </CategoryButton>
        <CategoryButton
          type="secondary"
          className="w-[110px] h-[35px] gap-2"
          onClick={handleShareClick}
        >
          <Box component="img" src={ICON.PROFILE.SHARE_ICON} alt="" />
          <Box component="span" className="sm:inline-block hidden">
            Share
          </Box>
        </CategoryButton>
        <CategoryButton
          type="secondary"
          className="w-[110px] h-[35px] gap-2"
          onClick={handleReportModalOpen}
        >
          <Box component="img" src={ICON.PROFILE.REPORT_ICON} alt="" />
          <Box component="span" className="sm:inline-block hidden">
            Report
          </Box>
        </CategoryButton>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
