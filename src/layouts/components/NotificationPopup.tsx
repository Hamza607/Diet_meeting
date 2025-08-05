import { useNavigate } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import { Divider } from "antd";
import { ICON, notifications, ROUTES } from "@constants";
import { AppPopover } from "@components";

const NotificationPopup = ({ setAnchorEl, anchorEl }: any) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <AppPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      classname="mt-2"
    >
      <Box className="bg-white-main w-full lg:w-[432px] rounded-[12px]">
        <Box className="w-full p-4 flex items-center justify-between">
          <Typography className="text-secondary-main font-inter-medium text-[16px]">
            Notifications
          </Typography>
          <Box
            component={"img"}
            src={ICON.DASHBOARD.MODALSETTING}
            alt="settings"
            className="cursor-pointer"
            onClick={() => navigate(ROUTES.DASHBOARD_SETTINGS_NOTIFICATIONS)}
          />
        </Box>
        <Divider className="border-white-light m-0" />

        <Box className="p-4">
          <Box className="flex flex-col gap-6 mb-2 max-h-[430px] overflow-y-auto">
            {notifications.map((n) => (
              <Box key={n.id} className="flex items-start gap-3">
                <Box className="w-1 h-1 rounded-full bg-primary-main mt-6" />

                <Avatar src={n.avatar} className="w-[50px] h-[50px]" />

                <Box className="flex-1">
                  <Typography className="text-secondary-main font-inter-medium text-[12px]">
                    {n.text}
                  </Typography>
                  <Typography
                    variant="caption"
                    className="text-secondary-light"
                  >
                    {n.time}
                  </Typography>
                </Box>

                {n.image && (
                  <Box
                    component={"img"}
                    src={n.image}
                    alt="preview"
                    className="w-[60px] h-[40px] object-cover rounded"
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </AppPopover>
  );
};

export default NotificationPopup;
