import { AppModal } from "@components";
import { Avatar, Box, ClickAwayListener, Typography } from "@mui/material";
import { ICON } from "@constants";
import { notifications } from "@constants";
import type { IModalNotificationsProps } from "@types";

const ModalNotifications: React.FC<IModalNotificationsProps> = ({
  open,
  onClose,
}) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="top-[68%] lg:top-[calc(41%-0px)] right-0 md:right-[calc(30%-0px)] lg:right-[calc(20%-0px)] w-full max-w-[432px] rounded-[12px] px-2 lg:px-0 z-[2000] outline-none"

      // contentClassName="top-28 lg:top-14 right-0 lg:right-20 px-2 lg:px-0 z-[2000] border border-white-main outline-none"
    >
      <ClickAwayListener onClickAway={onClose}>
        <Box>
          {/* Header */}
          <Box className="w-full p-4 flex items-center justify-between mb-4 border-b-[1px] border-solid border-white-light">
            <Typography className="text-secondary-main font-inter-medium text-[16px]">
              Notifications
            </Typography>
            <Box
              component={"img"}
              src={ICON.DASHBOARD.MODALSETTING}
              alt="settings"
              className="cursor-pointer"
            />
          </Box>

          <Box className="p-4">
            {/* Notification List */}
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

                  {/* Preview Image */}
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
      </ClickAwayListener>
    </AppModal>
  );
};

export default ModalNotifications;
