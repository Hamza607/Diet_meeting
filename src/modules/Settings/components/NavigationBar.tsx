import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Button } from "antd";
import { ROUTES } from "@constants";

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box className="flex flex-wrap sm:gap-4 gap-2 mt-3 mb-10">
      <Button
        className={`w-fit h-fit py-[0.25rem] md:px-[1rem] px-[0.75rem] md:text-base text-sm font-inter-medium font-medium !border-none !shadow-none rounded-lg ${
          location.pathname === ROUTES.DASHBOARD_SETTINGS_PERSONAL_INFO
            ? "!bg-primary-main !text-white-main"
            : "!bg-white-light !text-primary-main"
        }`}
        onClick={() => navigate(ROUTES.DASHBOARD_SETTINGS_PERSONAL_INFO)}
      >
        Personal Info
      </Button>
      <Button
        className={`w-fit h-fit py-[0.25rem] md:px-[1rem] px-[0.75rem] md:text-base text-sm font-inter-medium font-medium !border-none !shadow-none rounded-lg ${
          location.pathname === ROUTES.DASHBOARD_SETTINGS_SECURITY
            ? "!bg-primary-main !text-white-main"
            : "!bg-white-light !text-primary-main"
        }`}
        onClick={() => navigate(ROUTES.DASHBOARD_SETTINGS_SECURITY)}
      >
        Security
      </Button>
      <Button
        className={`w-fit h-fit py-[0.25rem] md:px-[1rem] px-[0.75rem] md:text-base text-sm font-inter-medium font-medium !border-none !shadow-none rounded-lg ${
          location.pathname === ROUTES.DASHBOARD_SETTINGS_NOTIFICATIONS
            ? "!bg-primary-main !text-white-main"
            : "!bg-white-light !text-primary-main"
        }`}
        onClick={() => navigate(ROUTES.DASHBOARD_SETTINGS_NOTIFICATIONS)}
      >
        Notification
      </Button>
      <Button
        className={`w-fit h-fit py-[0.25rem] md:px-[1rem] px-[0.75rem] md:text-base text-sm font-inter-medium font-medium !border-none !shadow-none rounded-lg ${
          location.pathname === ROUTES.DASHBOARD_SETTINGS_SUBSCRIPTION
            ? "!bg-primary-main !text-white-main"
            : "!bg-white-light !text-primary-main"
        }`}
        onClick={() => navigate(ROUTES.DASHBOARD_SETTINGS_SUBSCRIPTION)}
      >
        Subscription
      </Button>
      <Button
        className={`w-fit h-fit py-[0.25rem] md:px-[1rem] px-[0.75rem] md:text-base text-sm font-inter-medium font-medium !border-none !shadow-none rounded-lg ${
          location.pathname === ROUTES.DASHBOARD_SETTINGS_TERMS_CONDITIONS
            ? "!bg-primary-main !text-white-main"
            : "!bg-white-light !text-primary-main"
        }`}
        onClick={() => navigate(ROUTES.DASHBOARD_SETTINGS_TERMS_CONDITIONS)}
      >
        Terms and Conditions
      </Button>
      <Button
        className={`w-fit h-fit py-[0.25rem] md:px-[1rem] px-[0.75rem] md:text-base text-sm font-inter-medium font-medium !border-none !shadow-none rounded-lg ${
          location.pathname === ROUTES.DASHBOARD_SETTINGS_PRIVACY_POLICY
            ? "!bg-primary-main !text-white-main"
            : "!bg-white-light !text-primary-main"
        }`}
        onClick={() => navigate(ROUTES.DASHBOARD_SETTINGS_PRIVACY_POLICY)}
      >
        Privacy Policy
      </Button>
    </Box>
  );
};

export default NavigationBar;
