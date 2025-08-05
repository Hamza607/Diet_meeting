import React, { useEffect } from "react";
import { AppPopover } from "@components";
import { ICON } from "@constants";
import { Box, Button } from "@mui/material";
import type { IAnchorControl } from "@types";

const EditDeletePopup: React.FC<IAnchorControl> = ({
  setAnchorEl,
  anchorEl,
}) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popovervideo" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <Box className="flex flex-col py-2">
        <Button
          className="w-[132px] h-[49px] justify-start !pl-[1.375rem] text-sm font-inter-medium font-medium text-secondary-main gap-1 mb-3"
          startIcon={
            <Box
              component={"img"}
              src={ICON.PROFILE.DROP_EDIT_ICON}
              className="w-[33px] h-[33px]"
              alt="logout"
            />
          }
          onClick={handleClose}
        >
          Edit
        </Button>
        <Button
          className="w-[132px] h-[49px] justify-start !pl-[1.375rem] text-sm font-inter-medium font-medium text-secondary-main gap-1"
          startIcon={
            <Box
              component={"img"}
              src={ICON.PROFILE.DROP_DELETE_ICON}
              className="w-[33px] h-[33px]"
              alt="logout"
            />
          }
          onClick={handleClose}
        >
          Delete
        </Button>
      </Box>
    </AppPopover>
  );
};

export default EditDeletePopup;
