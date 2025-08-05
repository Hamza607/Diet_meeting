import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Divider, Typography } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { ICON, ROUTES } from "@constants";

const AppFooter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      className={`bg-[url(/assets/images/footer_bg.png),_linear-gradient(90deg,_#4D3FE2,_#796EE9)] py-[1.5em] px-[1em]`}
    >
      <Box className="w-full max-w-[1200px] mx-auto sm:flex justify-between">
        <Box>
          <Link
            to={ROUTES.ROOT}
            onClick={scrollToTop}
            className={`block text-sm text-white-main no-underline mb-8 ${
              location.pathname === ROUTES.ROOT
                ? "font-inter-black font-black"
                : "font-inter-bold font-bold"
            }`}
          >
            Home
          </Link>
          <Link
            to={ROUTES.ABOUT_US}
            onClick={scrollToTop}
            className={`block text-sm text-white-main no-underline mb-8 ${
              location.pathname === ROUTES.ABOUT_US
                ? "font-inter-black font-black"
                : "font-inter-bold font-bold"
            }`}
          >
            About Us
          </Link>
          <Link
            to={ROUTES.CONTACT_US}
            onClick={scrollToTop}
            className={`block text-sm text-white-main no-underline mb-8 ${
              location.pathname === ROUTES.CONTACT_US
                ? "font-inter-black font-black"
                : "font-inter-bold font-bold"
            }`}
          >
            Contact Us
          </Link>
          <Link
            to={ROUTES.FAQ}
            onClick={scrollToTop}
            className={`block text-sm text-white-main no-underline mb-8 ${
              location.pathname === ROUTES.FAQ
                ? "font-inter-black font-black"
                : "font-inter-bold font-bold"
            }`}
          >
            FAQ
          </Link>
          <Link
            to={ROUTES.BLOGS}
            onClick={scrollToTop}
            className={`block text-sm text-white-main no-underline mb-8 ${
              location.pathname === ROUTES.BLOGS
                ? "font-inter-black font-black"
                : "font-inter-bold font-bold"
            }`}
          >
            Blogs and News
          </Link>
        </Box>
        <Box className="footer-actions">
          <Button
            className="w-[230px] h-auto min-h-[52px] block text-base font-inter-medium rounded-lg bg-primary-strong border-primary-strong text-white-main my-4 mb-6 hover:bg-primary-strong hover:border-primary-strong"
            onClick={() => {
              navigate(ROUTES.LOGIN);
              scrollToTop();
            }}
          >
            Log in
          </Button>
          <Button
            className="w-[230px] h-auto min-h-[52px] block text-base font-inter-medium rounded-lg bg-white-main border-white-main text-primary-main hover:bg-white-main hover:border-white-main"
            onClick={() => {
              navigate(ROUTES.SIGNUP);
              scrollToTop();
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
      <Divider className="w-full max-w-[1200px] mx-auto bg-white-main opacity-[6%] mt-3 mb-5 h-[3px]" />
      <Box className="w-full max-w-[1200px] mx-auto sm:flex justify-between items-center pt-3">
        <Link to={ROUTES.ROOT} className="flex items-center gap-2 no-underline">
          <Box component="img" src={ICON.GLOBAL.LOGO_2} alt="logo" />
          <Typography className="text-2xl font-inter-regular font-normal text-white-main">
            DietMeetings
          </Typography>
        </Link>
        <Box className="my-5 sm:my-0">
          <Link
            to={ROUTES.TERMS_OF_SERVICE}
            onClick={scrollToTop}
            className="text-sm font-medium font-inter-medium text-white-main no-underline mr-4"
          >
            Terms of Service
          </Link>
          <Link
            to={ROUTES.PRIVACY_POLICY}
            onClick={scrollToTop}
            className="text-sm font-medium font-inter-medium text-white-main no-underline"
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
    </Box>
  );
};

export default AppFooter;
