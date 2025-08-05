import React, { Fragment } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ICON, menuItems, ROUTES, subscriptions } from "@constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "@context";

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsSearching } = useAppContext();
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  const fallbackFilledIcon = (index: number) => {
    switch (index) {
      case 0:
        return ICON.DASHBOARD.DASHBOARDFILLED;
      case 1:
        return ICON.DASHBOARD.ACTIVESIDE2;
      case 2:
        return ICON.DASHBOARD.ACTIVESIDE3;
      case 3:
        return ICON.DASHBOARD.ACTIVESIDE4;
      case 4:
        return ICON.DASHBOARD.ACTIVESIDE5;
      case 5:
        return ICON.DASHBOARD.ACTIVESIDE6;
      case 6:
        return ICON.DASHBOARD.ACTIVESIDE7;
      case 7:
        return ICON.DASHBOARD.ACTIVESIDE8;
      default:
        return ""; // fallback empty
    }
  };

  return (
    <Fragment>
      {/* ---------- DESKTOP SIDEBAR ---------- */}
      <Box className="hidden lg:flex fixed top-[66px] lg:top-[88px] md:w-[270px] lg:w-[240px] w-[140px] h-full border-r bg-white-main  py-6  flex-col ">
        {/* Scrollable Content Area */}
        <Box className=" flex-1 overflow-y-auto py-1 scrollbar-thin">
          <Box>
            <List disablePadding className="flex flex-col gap-4">
              {menuItems.map((item, index) => {
                const isActive = item.includePath
                  ? location.pathname.includes(item.includePath)
                  : location.pathname === item.path;

                return (
                  <ListItem
                    key={item.label}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => {
                      item.path && navigate(item.path);
                      setIsSearching(false);
                    }}
                    className={`group md:ml-[35px] ml-0 w-[180px] flex items-center justify-center gap-0 rounded-[14px] ${
                      hoveredItem === item.label ? "bg-white-thinner" : ""
                    } cursor-pointer ${isActive ? "bg-white-thinner" : ""}`}
                    // className={`group md:ml-[35px] ml-0 w-[180px] flex items-center justify-center gap-0 rounded-[14px] cursor-pointer hover:bg-white-light`}
                  >
                    <ListItemIcon className="min-w-[32px] transition-colors">
                      <Box
                        component="img"
                        src={
                          isActive || hoveredItem === item.label
                            ? item.filledIcon || fallbackFilledIcon(index)
                            : item.icon
                        }
                        alt={item.label}
                        className="w-5 h-5"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        className: `text-[12px]  ${
                          isActive
                            ? "text-primary-main font-inter-bold"
                            : "text-secondary-main group-hover:text-primary-main "
                        }`,
                        // className: `text-[12px] font-Inter-Medium text-gray-800 group-hover:text-primary-main group-hover:font-Inter-Bold`,
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>

            <Box
              borderBottom={1}
              className="border border-primary-main w-[180px] mx-auto my-5"
            />
          </Box>
          {/* Subscriptions Section */}
          <Box className="mt-6 mb-20">
            <Typography
              variant="subtitle2"
              className="text-md font-inter-medium text-secondary-main pl-8 mb-2 uppercase tracking-wide"
            >
              Subscriptions
            </Typography>

            <List disablePadding className="flex flex-col gap-4 mt-4">
              {subscriptions.map((user) => (
                <Box
                  key={user.name}
                  className="flex items-center gap-2 pe-2 ml-10 w-[180px] hover:bg-white-thinner cursor-pointer"
                  onClick={() => navigate(ROUTES.DASHBOARD_PROFILE)}
                >
                  <ListItem
                    key={user.name}
                    className=" px-2 py-1 flex items-center gap-2"
                  >
                    <Avatar
                      src={user.avatar}
                      alt={user.name}
                      className="w-[22px] h-[22px]"
                    />
                    <Typography className="text-xs text-secondary-light">
                      {user.name}
                    </Typography>
                  </ListItem>
                  <Box
                    component={"img"}
                    src={ICON.DASHBOARD.DOT}
                    className="w-[4px] h-[4px]"
                  />
                </Box>
              ))}
            </List>
          </Box>
        </Box>
      </Box>

      {/* ---------- MOBILE SIDEBAR ---------- */}
      <Box className="block lg:hidden w-full h-full px-4 py-6 overflow-y-auto ">
        {/* Scrollable Content Area */}
        <Box className=" flex-1 overflow-y-auto py-1 scrollbar-thin">
          {/* Menu Grid */}
          <Box className="">
            <List
              disablePadding
              className="grid grid-cols-2 gap-y-6 justify-center gap-x-4 mb-6"
            >
              {menuItems.map((item, index) => {
                const isActive = item.path && location.pathname === item.path;
                return (
                  <ListItem
                    key={index}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => {
                      item.path && navigate(item.path);
                      setIsSearching(false);
                    }}
                    className={`group md:ml-[35px] ml-0 w-[180px] flex items-center justify-center gap-0 rounded-[14px] ${
                      hoveredItem === item.label ? "bg-white-thinner" : ""
                    } cursor-pointer ${isActive ? "bg-white-thinner" : ""}`}
                  >
                    <ListItemIcon className="min-w-[32px] transition-colors">
                      <Box
                        component="img"
                        src={
                          isActive || hoveredItem === item.label
                            ? item.filledIcon || fallbackFilledIcon(index)
                            : item.icon
                        }
                        alt={item.label}
                        className="w-5 h-5"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        className: `text-[12px]  ${
                          isActive
                            ? "text-primary-main font-inter-bold"
                            : "text-gray-800 group-hover:text-primary-main "
                        }`,
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box className="ml-0 my-[15px] w-full border-[1px] border-solid border-primary-main" />

          {/* Subscriptions */}
          <Box mb={40}>
            <Typography className="text-md text-secondary-main mb-2 uppercase tracking-wide">
              Subscriptions
            </Typography>
            <Box className="flex flex-col gap-7 ml-[4px]">
              {subscriptions.map((user) => (
                <ListItem
                  key={user.name}
                  className="w-[180px] flex items-center gap-3 p-0 hover:bg-white-thinner cursor-pointer pl-[8px]"
                  onClick={() => navigate(ROUTES.DASHBOARD_PROFILE)}
                >
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    className="w-7 h-7"
                  />
                  <Typography className="text-xs text-secondary-light font-inter-medium">
                    {user.name}
                  </Typography>
                </ListItem>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default DashboardSidebar;
