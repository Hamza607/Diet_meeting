import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Drawer, Typography } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { useAppContext } from "@context";
import { ICON, ROUTES } from "@constants";

const AppNavMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { menu, setMenu } = useAppContext();

  return (
    <Drawer anchor="bottom" open={menu}>
      <Box className="bg-gradient-to-r from-primary-hard to-primary-light p-4 flex flex-col justify-between h-screen">
        <Box className="flex items-center">
          <Box
            component="img"
            src={ICON.LANDING.MENU_OPEN_ICON}
            alt=""
            className="cursor-pointer mr-4"
            onClick={() => setMenu(false)}
          />
          <Link
            to={ROUTES.ROOT}
            className="flex items-center gap-2 no-underline"
            onClick={() => setMenu(false)}
          >
            <Box component="img" src={ICON.GLOBAL.LOGO_2} alt="logo" />
            <Typography className="text-2xl font-inter-regular font-normal text-white-main">
              DietMeetings
            </Typography>
          </Link>
        </Box>
        <Box>
          <Button
            className="w-full h-auto py-2 px-[1.375em] text-base font-inter-medium rounded-[5px] bg-transparent border-[1px] border-solid border-white-main text-white-main mb-4"
            onClick={() => {
              navigate(ROUTES.SIGNUP);
              setMenu(false);
            }}
          >
            Sign up
          </Button>
          <Button
            className="w-full h-auto py-2 px-[1.375em] text-base font-inter-medium rounded-[5px] bg-white-main border border-white-main text-primary-main"
            onClick={() => {
              navigate(ROUTES.LOGIN);
              setMenu(false);
            }}
          >
            Log in
          </Button>
        </Box>
        <Box>
          <Link
            to={ROUTES.ROOT}
            className={`block text-2xl text-white-main no-underline hover:font-inter-bold mb-6 font-inter-black ${
              location.pathname === ROUTES.ROOT
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
            onClick={() => setMenu(false)}
          >
            Home
          </Link>
          <Link
            to={ROUTES.ABOUT_US}
            className={`block text-2xl text-white-main no-underline hover:font-inter-bold mb-6 font-inter-black ${
              location.pathname === ROUTES.ABOUT_US
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
            onClick={() => setMenu(false)}
          >
            About Us
          </Link>
          <Link
            to={ROUTES.FAQ}
            className={`block text-2xl text-white-main no-underline hover:font-inter-bold mb-6 font-inter-black ${
              location.pathname === ROUTES.FAQ
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
            onClick={() => setMenu(false)}
          >
            FAQ
          </Link>
          <Link
            to={ROUTES.BLOGS}
            className={`block text-2xl text-white-main no-underline hover:font-inter-bold mb-6 font-inter-black ${
              location.pathname === ROUTES.BLOGS
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
            onClick={() => setMenu(false)}
          >
            Blogs
          </Link>
          <Link
            to={ROUTES.CONTACT_US}
            className={`block text-2xl text-white-main no-underline hover:font-inter-bold font-inter-black ${
              location.pathname === ROUTES.CONTACT_US
                ? "font-inter-black font-black"
                : "font-inter-medium font-medium"
            }`}
          >
            Contact Us
          </Link>
        </Box>
        <Box>
          <Link
            to={ROUTES.TERMS_OF_SERVICE}
            className="text-sm font-inter-medium text-white-main no-underline mr-4"
            onClick={() => setMenu(false)}
          >
            Terms of Service
          </Link>
          <Link
            to={ROUTES.PRIVACY_POLICY}
            className="text-sm font-inter-medium text-white-main no-underline"
            onClick={() => setMenu(false)}
          >
            Privacy Policy
          </Link>
        </Box>
        <Box className="flex">
          <Box className="w-[35px] h-[35px] border-[1.5px] border-solid border-white-thinnest rounded-full flex justify-center items-center mr-4">
            <LiaLinkedinIn className="text-white-main cursor-pointer text-2xl" />
          </Box>
          <Box className="w-[35px] h-[35px] border-[1.5px] border-solid border-white-thinnest rounded-full flex justify-center items-center">
            <FaFacebookF className="text-white-main cursor-pointer text-lg" />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AppNavMenu;
