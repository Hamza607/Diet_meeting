import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ICON } from "@constants";
import { AppButton, AppModal } from "@components";
import type { IReportSuccessModal } from "@types";

const ReportSuccessModal: React.FC<IReportSuccessModal> = ({
  open,
  onClose,
  handleSubmit,
}) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[629px] rounded-xl p-[20px] sm:p-[40px]"
    >
      <Box>
        <Box className="flex justify-end w-full mr-0 lg:mr-16">
          <IconButton onClick={onClose}>
            <Box
              component="img"
              src={ICON.DASHBOARD.MODALCLOSE}
              alt=""
              className="w-[32px] h-[32px] "
            />
          </IconButton>
        </Box>
        <Box className="flex gap-2 items-center">
          <Box
            component={"img"}
            src={ICON.CONTENTHUB.SUBMITREPORT}
            alt=""
            className="w-[32px] h-[32px] "
          />
          <Typography variant="h3">Report Submitted</Typography>
        </Box>
        <Typography className="text-secondary-light  font-inter-regular font-normal py-6 md:text-[20px]">
          We appreciate your feedback. Our moderators will look into it.
        </Typography>
        <AppButton onClick={handleSubmit}>Done</AppButton>
      </Box>
    </AppModal>
  );
};

export default ReportSuccessModal;
