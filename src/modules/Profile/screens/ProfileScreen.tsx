import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import type { IProfileScreen } from "@types";
import { ICON, PROFILE_TABS } from "@constants";
import { CategoryButton } from "@components";
import {
  LikedContent,
  PastMeetings,
  ProfileInfo,
  Reviews,
  UpcomingMeetings,
  UploadedContent,
  WatchedContent,
} from "@profileComponents";
import { Upload } from "antd";

const ProfileScreen: React.FC<IProfileScreen> = ({
  activeTab,
  fileList,
  FileListChange,
  handleTabChange,
  handleChangeAddressModalOpen,
  handleChangeLinksModalOpen,
  handleChangeAboutModalOpen,
}) => {

  return (
    <Box>
      
        <>
          <Box
            className={`w-full h-[196px] rounded-[20px] overflow-hidden flex items-center justify-center relative mb-8 transition-all duration-500 ease-in-out ${
              fileList.length < 1
                ? "bg-gradient-to-r from-primary-hard to-primary-light"
                : ""
            }`}
          >
            <Upload
              listType="picture-card"
              accept="image/*"
              maxCount={1}
              fileList={fileList}
              onChange={FileListChange}
              beforeUpload={() => false}
              className="w-full cover-upload-container"
            >
              <IconButton
                className="w-[40px] h-[40px] rounded-xl bg-primary-main flex items-center justify-center cursor-pointer absolute bottom-[10px] right-[10px] z-[9]"
                onClick={(e) => e.preventDefault()}
              >
                <Box
                  component="img"
                  src={ICON.PROFILE.EDIT_ICON}
                  alt=""
                  className="brightness-0 invert sepia-100 saturate-0 hue-rotate-288 brightness-102 contrast-102"
                />
              </IconButton>
            </Upload>
          </Box>
          <ProfileInfo
            handleChangeAddressModalOpen={handleChangeAddressModalOpen}
            handleChangeLinksModalOpen={handleChangeLinksModalOpen}
          />
          <Box className="mt-8">
            <Box className="flex gap-2 mb-2">
              <Typography className="text-[2em] font-poppins-bold font-bold text-black-main">
                About Me
              </Typography>
              <Box
                component="img"
                src={ICON.PROFILE.EDIT_ICON}
                alt=""
                className="cursor-pointer"
                onClick={handleChangeAboutModalOpen}
              />
            </Box>
            <Typography className="w-full max-w-[1000px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id.
            </Typography>
          </Box>
          <Box className="flex flex-wrap items-center sm:gap-4 gap-2 mt-4 mb-6">
            {PROFILE_TABS.map((tab, index) => {
              const { className, value, label } = tab;
              return (
                <CategoryButton
                  key={index}
                  type={activeTab === value ? "primary" : "secondary"}
                  className={className}
                  onClick={() => handleTabChange(value)}
                >
                  {label}
                </CategoryButton>
              );
            })}
          </Box>
          {activeTab === "uploadedContent" && <UploadedContent />}
          {activeTab === "pastMeetings" && <PastMeetings />}
          {activeTab === "previouslyWatchedContent" && <WatchedContent />}
          {activeTab === "likedContent" && <LikedContent />}
          {activeTab === "upcomingMeetings" && <UpcomingMeetings />}
          {activeTab === "reviews" && <Reviews />}
        </>
    </Box>
  );
};

export default ProfileScreen;
