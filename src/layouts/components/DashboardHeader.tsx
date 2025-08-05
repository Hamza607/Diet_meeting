import React, { Fragment, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@context";
import { ICON, ROUTES, actionButtons } from "@constants";
import { AppButton, AppFormItem } from "@components";
import { ModalUploadContent } from "@feedComponents";
import { NotificationPopup, ProfilePopup } from "@layoutsComponents";
import type { IDashboardHeaderProps } from "@types";

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({
  onToggleSidebar,
  sidebarOpen,
  onToggleSidebarMenu,
  sidebarMenuOpen,
}) => {
  const navigate = useNavigate();
  const { setIsSearching } = useAppContext();

  // const [showNotifications, setShowNotifications] = useState(false);
  // const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorProfile, setAnchorProfile] = useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClickProfile = (e: any) => {
    setAnchorProfile(e.currentTarget);
  };

  const handleActionClick = (key: string) => {
    switch (key) {
      case "upload":
        setShowUploadModal(true);

        break;
      case "Discussion":
        navigate(ROUTES.DASHBOARD_FORUM_NEW_POST);
        break;
      case "meeting":
        console.log("Start Meeting clicked");
        navigate(ROUTES.DASHBOARD_START_LIVE_MEETING);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <Box className="fixed top-0 z-50 w-full bg-white-main border-b px-6 py-4 flex items-center justify-between shadow-sm">
        {/* Left: Logo + Search */}
        <Box className="flex items-center gap-6">
          <Box
            className="cursor-pointer hidden lg:flex"
            onClick={onToggleSidebarMenu}
          >
            {sidebarMenuOpen == false ? (
              <Box
                component={"img"}
                src={ICON.DASHBOARD.HEADERMENUFILL}
                alt="menu"
              />
            ) : (
              <Box
                component={"img"}
                src={ICON.DASHBOARD.HEADERMENU}
                alt="menu"
              />
            )}
          </Box>
          <Box
            className="cursor-pointer flex lg:hidden"
            onClick={onToggleSidebar}
          >
            {sidebarOpen == false ? (
              <Box
                component={"img"}
                src={ICON.DASHBOARD.HEADERMENUFILL}
                alt="menu"
              />
            ) : (
              <Box
                component={"img"}
                src={ICON.DASHBOARD.HEADERMENU}
                alt="menu"
              />
            )}
          </Box>

          {/* Logo */}
          <Box className="flex items-center gap-2 cursor-pointer ">
            <Box
              component={"img"}
              src={ICON.DASHBOARD.HEADERLOGO}
              alt="logo"
              className="lg:w-8 lg:h-8 w-6 h-6 object-contain "
            />
            <Typography className="lg:!text-[22px] !text-[24px] font-inter-regular text-primary-main ">
              DietMeetings
            </Typography>
          </Box>
        </Box>

        <Box className="flex items-center gap-4">
          <Box className="relative hidden lg:flex items-center">
            <AppFormItem
              type="input"
              onInputChange={(e) =>
                setIsSearching(e.target.value.trim() !== "")
              }
              placeholder="Search"
              itemClassName="relative w-full lg:w-[200px] xl:w-[400px]"
              inputClassName="absolute top-[6px] bg-secondary-secondary"
            />
            <Box
              component={"img"}
              src={ICON.DASHBOARD.HEADERSEARCH}
              alt="search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
          </Box>

          {actionButtons.map(({ key, label, icon }) => (
            <AppButton
              key={key}
              onClick={() => handleActionClick(key)}
              className="hidden lg:block max-w-[175px] !text-[12px] xl:!text-[16px] "
            >
              <Box
                component={"img"}
                src={icon}
                alt={icon}
                className="object-contain mr-2 w-4 xl:w-auto"
              />
              {label}
            </AppButton>
          ))}
          {/* // Upload Modal // */}
          <ModalUploadContent
            open={showUploadModal}
            onClose={() => setShowUploadModal(false)}
          />
          {/* Notification */}

          <Box onClick={(e) => handleClick(e)} className="cursor-pointer">
            <Box
              component={"img"}
              src={ICON.DASHBOARD.HEADERNOTIFICATION}
              alt="notifications"
              className="hidden md:block"
            />
          </Box>
          {/* <ModalNotifications
              open={showNotifications}
              onClose={() => setShowNotifications(false)}
            /> */}
          <NotificationPopup anchorEl={anchorEl} setAnchorEl={setAnchorEl} />

          {/* // profile // */}
          <Box id="profile-anchor" className="relative ">
            <Box
              onClick={(e) => handleClickProfile(e)}
              className="w-9 h-9 rounded-full overflow-hidden border border-black cursor-pointer"
            >
              <Avatar
                alt="Profile"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="hidden md:block w-[36px] h-[36px]"
              />
            </Box>

            {/* Profile Dropdown Modal */}

            {/* <ModalProfile
              open={showProfileMenu}
              onClose={() => setShowProfileMenu(false)}
            /> */}
          </Box>

          <ProfilePopup
            setAnchorEl={setAnchorProfile}
            anchorEl={anchorProfile}
          />
        </Box>
      </Box>

      {/* // mobile screen header // */}
      <Box
        className={`fixed top-[68px] z-20 w-full bg-white-main  px-4 ${
          sidebarOpen ? "py-3" : "pt-6"
        }   lg:hidden`}
      >
        {/* { click the onToggleSidebar then hidden the search bar} */}

        {!sidebarOpen && (
          <Box className="relative block lg:hidden items-center">
            {/* <InputBase
              type="text"
              placeholder="Search"
              onChange={(e) => setIsSearching(e.target.value.trim() !== "")}
              className={`pl-4 pr-10 w-full sm:min-w-[358px] h-[44px] border border-black rounded-[4px] bg-[${COLORS.secondary.thinner}] text-sm`}
            /> */}
            <AppFormItem
              type="input"
              onInputChange={(e) =>
                setIsSearching(e.target.value.trim() !== "")
              }
              placeholder="Search"
              itemClassName="relative w-full lg:w-[200px] xl:w-[400px]"
              inputClassName="absolute top-[-6px] bg-secondary-secondary"
            />
            <Box
              component={"img"}
              src={ICON.DASHBOARD.HEADERSEARCH}
              alt="search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
          </Box>
        )}

        {sidebarOpen && (
          <Fragment>
            <Box className="flex items-center justify-between mt-2 lg:hidden">
              {/* // profile // */}
              <Box id="profile-anchor" className="relative">
                <Box className="flex items-center gap-2">
                  <Box
                    onClick={(e) => handleClickProfile(e)}
                    className="w-9 h-9 rounded-full overflow-hidden border border-black cursor-pointer"
                  >
                    <Avatar
                      alt="Profile"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-[34px] h-[34px]"
                    />
                  </Box>
                  <Typography className="text-[16px] font-inter-medium">
                    Jhon Baer
                  </Typography>
                </Box>
                <ProfilePopup
                  setAnchorEl={setAnchorProfile}
                  anchorEl={anchorProfile}
                />
              </Box>
              {/* Notification */}
              <Box id="notification-anchor" className="relative">
                <Box onClick={(e) => handleClick(e)} className="cursor-pointer">
                  <Box
                    component={"img"}
                    src={ICON.DASHBOARD.HEADERNOTIFICATION}
                    alt="notifications"
                  />
                </Box>
              </Box>
              <NotificationPopup
                open={open}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
              />
            </Box>

            {/* /// Actions button // */}
            <Box className="flex flex-col gap-2 mt-4 lg:hidden">
              {actionButtons.map(({ key, label, icon }) => (
                <AppButton key={key} onClick={() => handleActionClick(key)}>
                  <Box
                    component={"img"}
                    src={icon}
                    alt={icon}
                    className="object-contain mr-2"
                  />
                  {label}
                </AppButton>
              ))}
            </Box>
          </Fragment>
        )}
      </Box>
    </Fragment>
  );
};

export default DashboardHeader;
