import { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { ICON } from "@constants";
import { AppPopover } from "@components";
import { useAppContext } from "@context";
import type { IAnchorControl } from "@types";

const ReportPopup = ({ setAnchorEl, anchorEl }: IAnchorControl) => {
  const { handleReportModalOpen } = useAppContext();
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
      <Box>
        <Button
          className="justify-start text-left w-[184px] h-[73px] px-4 py-2  text-sm font-inter-semibold text-secondary-main"
          startIcon={
            <Box
              component={"img"}
              src={ICON.DASHBOARD.INFO_MESSAGE_ICON}
              className="w-[20px] h-[20px]"
              alt="logout"
            />
          }
          onClick={() => {
            handleReportModalOpen();
            handleClose();
          }}
        >
          Report Comment
        </Button>
      </Box>
    </AppPopover>
  );
};

export default ReportPopup;
