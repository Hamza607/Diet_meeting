import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { ICON, ROUTES } from "@constants";
import { useNavigate } from "react-router-dom";
import { AppPopover } from "@components";

const ProfilePopup = ({ setAnchorEl, anchorEl }: any) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <AppPopover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
      <Box className="w-[191px]">
        <Box
          className="w-full flex items-center gap-2  border-b border-white-light pb-2
                  p-4"
        >
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-[40px] h-[40px] "
          />
          <Typography className="text-[12px] font-inter-medium text-secondary-main">
            John Baer
          </Typography>
        </Box>
        <Divider className="border-white-light" />

        {/* Actions */}
        <Box className="p-4">
          <Box className="flex flex-col gap-3">
            <Button
              className="justify-start text-left text-sm font-medium text-secondary-main"
              startIcon={
                <Box
                  component={"img"}
                  src={ICON.DASHBOARD.MODALPROFILE}
                  className="w-[33px] h-[33px]"
                  alt="profile"
                />
              }
              onClick={() => navigate(ROUTES.DASHBOARD_PROFILE)}
            >
              Profile
            </Button>
            <Button
              className="justify-start text-left text-sm font-medium text-secondary-main"
              startIcon={
                <Box
                  component={"img"}
                  src={ICON.DASHBOARD.MODALLOGOUT}
                  className="w-[33px] h-[33px]"
                  alt="logout"
                />
              }
            >
              Log Out
            </Button>
          </Box>
        </Box>
      </Box>
    </AppPopover>
  );
};
export default ProfilePopup;
