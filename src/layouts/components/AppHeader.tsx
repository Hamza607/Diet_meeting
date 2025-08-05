import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useAppContext } from "@context";
import { ICON, ROUTES } from "@constants";

const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setMenu } = useAppContext();

  return (
    <Box className="bg-white-main lg:bg-gradient-to-r from-primary-hard to-primary-light py-[1.375em] px-4">
      <Box className="w-full max-w-[1270px] flex items-center mx-auto">
        <Link
          to={ROUTES.ROOT}
          className="hidden lg:flex items-center gap-2 no-underline"
        >
          <Box component="img" src={ICON.GLOBAL.LOGO_2} alt="logo" />
          <Typography className="text-2xl font-inter-regular font-normal text-white-main">
            DietMeetings
          </Typography>
        </Link>
        <Box className="flex lg:hidden">
          <Box
            component="img"
            src={ICON.LANDING.MENU_CLOSE_ICON}
            alt="menu-icon"
            className="cursor-pointer mr-4"
            onClick={() => setMenu(true)}
          />
          <Link
            to={ROUTES.ROOT}
            className="flex items-center gap-2 no-underline"
          >
            <Box component="img" src={ICON.GLOBAL.LOGO} alt="logo" />
            <Typography className="text-2xl font-inter-regular font-normal text-primary-main">
              DietMeetings
            </Typography>
          </Link>
        </Box>
        <Box className="hidden lg:flex justify-around w-full mx-4">
          <Link
            to={ROUTES.ROOT}
            className={`text-sm text-white-main no-underline hover:font-inter-bold ${
              location.pathname === ROUTES.ROOT
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
          >
            Home
          </Link>
          <Link
            to={ROUTES.ABOUT_US}
            className={`text-sm text-white-main no-underline hover:font-inter-bold ${
              location.pathname === ROUTES.ABOUT_US
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
          >
            About Us
          </Link>
          <Link
            to={ROUTES.FAQ}
            className={`text-sm text-white-main no-underline hover:font-inter-bold ${
              location.pathname === ROUTES.FAQ
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
          >
            FAQ
          </Link>
          <Link
            to={ROUTES.BLOGS}
            className={`text-sm text-white-main no-underline hover:font-inter-bold ${
              location.pathname === ROUTES.BLOGS
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
          >
            Blogs and News
          </Link>
          <Link
            to={ROUTES.CONTACT_US}
            className={`text-sm text-white-main no-underline hover:font-inter-bold ${
              location.pathname === ROUTES.CONTACT_US
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
          >
            Contact Us
          </Link>
        </Box>
        <Box className="hidden lg:flex">
          <Button
            className="w-max h-auto py-2 px-[1.375em] text-base font-inter-medium rounded-[5px] bg-transparent border-[1px] border-solid border-white-main text-white-main"
            onClick={() => navigate(ROUTES.SIGNUP)}
          >
            Sign up
          </Button>
          <Button
            className="w-max h-auto py-2 px-[1.375em] text-base font-inter-medium rounded-[5px] bg-white-main border border-white-main text-primary-main ml-4"
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AppHeader;
