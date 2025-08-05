import { AppButton, AppModal } from "@components";
import { Box, Typography, IconButton, ClickAwayListener } from "@mui/material";
import { ICON, ROUTES } from "@constants";
import { useNavigate } from "react-router-dom";
import type {IModalUploadContent} from "@types"


const ModalUploadContent: React.FC<IModalUploadContent> = ({
  open,
  onClose,
}) => {
  const navigate = useNavigate();
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[549px] rounded-[20px] sm:p-[1.9rem] p-[0]"
    >
      <ClickAwayListener onClickAway={onClose}>
        <Box>
          <Box className="flex flex-col gap-0 items-center relative">
            <Box className="flex justify-end w-full mr-0 lg:mr-20">
              <IconButton onClick={onClose}>
                <Box component={"img"} src={ICON.DASHBOARD.MODALCLOSE} alt="" />
              </IconButton>
            </Box>

            {/* Title */}
            <Typography className="text-[24px] lg:text-[48px] font-poppins-bold text-secondary-main text-center mb-6">
              Become a Coach
            </Typography>
          </Box>
          <Box className="sm:p-[0] p-[10px]">
            {/* Icon + Description */}
            <Box className="flex flex-col items-center gap-2 mb-4 ">
              <Box
                component={"img"}
                src={ICON.DASHBOARD.MODALCONTENT}
                alt="Coach"
                className="w-[64px] h-[64px]"
              />
              <Typography className="text-[17.5] font-inter-semibold mt-1 text-secondary-main">
                Coach
              </Typography>
              <Typography
                className="text-center text-[14px] text-secondary-light
                  w-full sm:w-[340px]"
              >
                Upload content, host and schedule meetings, share your
                experiences, your brand or products to help others.
              </Typography>
              <Typography className="text-[32px] font-inter-semibold text-secondary-main mt-1">
                XX.XX / month
              </Typography>
            </Box>

            {/* Buttons */}
            <Box className="flex flex-col gap-3 mt-4">
              <AppButton                 
                onClick={() => {
                  navigate(ROUTES.DASHBOARD_UPLOAD_CONTENT);
                  onClose();
                }}
              >
                Continue as a Coach
              </AppButton>
              <AppButton
                styleType="bordered"
                onClick={() => {
                  onClose();
                }}
              >
                Maybe Later
              </AppButton>
            </Box>
          </Box>
        </Box>
      </ClickAwayListener>
    </AppModal>
  );
};

export default ModalUploadContent;
