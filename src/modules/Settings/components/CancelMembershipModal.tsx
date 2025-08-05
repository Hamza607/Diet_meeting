import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import type { ICancelMembershipModal } from "@types";
import { ICON } from "@constants";
import { AppButton, AppModal } from "@components";

const CancelMembershipModal: React.FC<ICancelMembershipModal> = ({
  open,
  onClose,
  handleSubmit,
}) => {
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
          Cancel Coach Membership
        </Typography>
        <Typography className="sm:text-base text-sm text-secondary-light my-[2em]">
          Are you sure to cancel your Coach membership?
          <Box component="br" />
          Your membership will continue until XXth of the April
        </Typography>
        <AppButton onClick={onClose}>Keep Membership</AppButton>
        <AppButton styleType="bordered" className="mt-4" onClick={handleSubmit}>
          Cancel Membership
        </AppButton>
      </Box>
    </AppModal>
  );
};

export default CancelMembershipModal;
