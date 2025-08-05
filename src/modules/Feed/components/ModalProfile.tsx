import { AppModal } from "@components";
import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  Typography,
} from "@mui/material";
import { ICON } from "@constants";
import type {IModalProfileProps} from "@types"

const ModalProfile: React.FC<IModalProfileProps> = ({ open, onClose }) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="top-[46%] lg:top-[calc(25%-0px)] right-[74%] lg:right-[calc(8%-0px)] w-full max-w-[191px] rounded-[12px] px-2 lg:px-0 z-[2000] border border-white-main outline-none"
    >
      <ClickAwayListener onClickAway={onClose}>
        <Box>
          {/* Profile Info */}
          <Box className="w-full flex items-center gap-2 mb-4 border-b-[1px] border-solid border-white-light pb-2 p-4">
            <Avatar
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-[40px] h-[40px]"
            />
            <Typography className="text-sm font-semibold text-secondary-main">
              John Baer
            </Typography>
          </Box>

          {/* Actions */}
          <Box className="p-4">
            <Box className="flex flex-col gap-3">
              <Button
                className="justify-start text-left text-sm font-medium text-secondary-main"
                startIcon={
                  <Box
                    component={"img"}
                    src={ICON.DASHBOARD.MODALPROFILE}
                    alt="profile"
                  />
                }
              >
                Profile
              </Button>
              <Button
                className="justify-start text-left text-sm font-medium text-secondary-main"
                startIcon={
                  <Box
                    component={"img"}
                    src={ICON.DASHBOARD.MODALLOGOUT}
                    alt="logout"
                  />
                }
              >
                Log Out
              </Button>
            </Box>
          </Box>
        </Box>
      </ClickAwayListener>
    </AppModal>
  );
};

export default ModalProfile;
