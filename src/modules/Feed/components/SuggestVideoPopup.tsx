import { Box, Button } from "@mui/material";
import { ICON } from "@constants";
import { AppPopover } from "@components";
import { useEffect, useState } from "react";
import { Divider } from "antd";
import { useAppContext } from "@context";

const SuggestVideoPopup = ({ setAnchorEl, anchorEl }: any) => {
  const { handleReportModalOpen } = useAppContext();
  const [bell, setBell] = useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popovervideo" : undefined;

  // Prevent scrolling when popover is open
  useEffect(() => {
    if (open) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Prevent scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        // Restore scrolling when popover closes
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <AppPopover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
      <Box className={`min-w-[238px]`}>
        {/* Actions */}
        <Box className="px-4 py-2">
          <Box className="flex flex-col ">
            <Button
              onClick={() => setBell(!bell)}
              className="justify-start text-left py-2 text-sm font-inter-semibold text-secondary-main"
              startIcon={
                bell ? (
                  <Box
                    component={"img"}
                    src={ICON.SUGGESTVIDEO.SUBSCRIBE_PLAN}
                    className="w-[20px] h-[20px]"
                    alt="profile"
                  />
                ) : (
                  <Box
                    component={"img"}
                    src={ICON.SUGGESTVIDEO.UNSUBSCRIBE_Plan}
                    className="w-[20px] h-[20px]"
                    alt="profile"
                  />
                )
              }
            >
              {bell
                ? "Subscribe to this Profile"
                : "Unsubscribe from this Profile"}
            </Button>
            <Divider className="my-1" />
            <Button
              className="justify-start text-left py-2 text-sm font-inter-semibold text-secondary-main"
              startIcon={
                <Box
                  component={"img"}
                  src={ICON.SUGGESTVIDEO.REPORT}
                  className="w-[20px] h-[20px]"
                  alt="logout"
                />
              }
              onClick={() => {
                handleClose();
                handleReportModalOpen();
              }}
            >
              Report Video
            </Button>
          </Box>
        </Box>
      </Box>
    </AppPopover>
  );
};
export default SuggestVideoPopup;
