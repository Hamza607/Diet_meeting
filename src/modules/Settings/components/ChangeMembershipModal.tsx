import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import type { IChangeMembershipModal } from "@types";
import { ICON, ROUTES } from "@constants";
import { AppButton, AppModal } from "@components";

const ChangeMembershipModal: React.FC<IChangeMembershipModal> = ({
  open,
  onClose,
  handleSubmit,
}) => {
  const navigate = useNavigate();
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[629px] rounded-[20px] sm:p-[2.5rem] p-[1.25rem]"
    >
      <Box>
        <Box className="flex justify-end w-full mr-0 lg:mr-16">
          <IconButton onClick={onClose}>
            <Box component="img" src={ICON.DASHBOARD.MODALCLOSE} alt="" />
          </IconButton>
        </Box>
        <Typography variant="h3" className="font-poppins-bold font-bold mb-7">
          Change Membership
        </Typography>
        <Box className="w-[64px] h-[64px] rounded-full flex items-center justify-center mx-auto bg-white-light">
          <Box component="img" src={ICON.ONBOARDING.COACH_ICON} alt="" />
        </Box>
        <Box className="w-auto max-w-[340px] mx-auto text-center mt-[1em]">
          <Typography className="text-xl font-inter-semibold font-semibold text-secondary-main mb-1">
            Coach
          </Typography>
          <Typography className="text-xs text-secondary-light">
            Upload content, host and schedule meetings, and share your
            experiences, your brand or products to help others.
          </Typography>
        </Box>
        <Typography className="text-[2rem] font-inter-semibold font-semibold text-primary-main mt-[1em] mb-[0.75em]">
          XX.XX/ month
        </Typography>
        <Typography className="sm:text-base text-sm text-secondary-light mb-8">
          You will be charged today, and then monthly on the XXth. Cancel
          anytime in Profile → Membership. By tapping the button below, you
          agree to the details above, our
          {"  "}
          <Box
            component="span"
            className="underline cursor-pointer"
            onClick={() => {
              navigate(ROUTES.DASHBOARD_SETTINGS_TERMS_CONDITIONS);
              onClose();
            }}
          >
            Terms and Conditions
          </Box>{" "}
          and our
          {"  "}
          <Box
            component="span"
            className="underline cursor-pointer"
            onClick={() => {
              navigate(ROUTES.DASHBOARD_SETTINGS_PRIVACY_POLICY);
              onClose();
            }}
          >
            Privacy Policy
          </Box>
          .
        </Typography>
        <AppButton onClick={handleSubmit}>Confirm Plan Change</AppButton>
      </Box>
    </AppModal>
  );
};

export default ChangeMembershipModal;
