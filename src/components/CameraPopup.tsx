import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { AppPopover } from "@components";
import { ICON } from "@constants";
import type { IAnchorControl } from "@types";

const CameraPopup = ({ setAnchorEl, anchorEl }: IAnchorControl) => {
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
    <AppPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      classname="mt-2"
      onClose={handleClose}
    >
      <Box className={`min-w-[238px]`}>
        {/* Actions */}
        <Box className="px-4 py-2">
          <Box className="flex flex-col ">
            <Button
              className="justify-start text-left py-2 text-sm font-inter-semibold text-secondary-main"
              startIcon={
                <Box component={"img"} src={ICON.CONTENTHUB.CAMERAA} />
              }
            >
              FaceTime HD Camera (Built-In)
            </Button>
          </Box>
        </Box>
      </Box>
    </AppPopover>
  );
};

export default CameraPopup;
