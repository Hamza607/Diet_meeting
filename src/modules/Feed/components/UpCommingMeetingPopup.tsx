import { useEffect, useState } from "react";
import { AppPopover } from "@components";
import { Box, Button, Divider } from "@mui/material";
import {  ICON } from "@constants";
import type {IUpCommingMeetingPopup} from "@types"


const UpCommingMeetingPopup = ({
  setAnchorEl,
  anchorEl,
}: IUpCommingMeetingPopup) => {
  const [bell, setBell] = useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [reminder, setReminder] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popovervideo" : undefined;

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
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
      <Box className="min-w-[238px]">
        {/* Actions */}
        <Box className="px-4 py-2">
          <Box className="flex flex-col ">
            <Button
              onClick={() => setReminder(!reminder)}
              className="justify-start text-left py-2 text-sm font-inter-semibold text-secondary-main"
             
            >
              {reminder ? "Remind Me" : "Turn off Reminder "}
            </Button>
            <Divider className="my-1" />
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
          </Box>
        </Box>
      </Box>
    </AppPopover>
  );
};

export default UpCommingMeetingPopup;
