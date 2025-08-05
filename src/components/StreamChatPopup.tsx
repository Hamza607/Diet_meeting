import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { Divider } from "antd";
import { AppPopover } from "@components";
import { ICON } from "@constants";
import type { IStreamChatPopup } from "@types";

const StreamChatPopup = ({
  setAnchorEl,
  anchorEl,
  setShowChat,
  showChat,
}: IStreamChatPopup) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <AppPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      classname="-mt-2"
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Box className={`min-w-[238px]`}>
        {/* Actions */}
        <Box className=" ">
          <Box className="flex flex-col ">
            <Button
              onClick={() => setShowChat?.(!showChat)}
              className="justify-start gap-2 p-4 h-[52px] text-left  text-sm font-inter-semibold text-secondary-main"
              startIcon={
                <Box
                  component={"img"}
                  src={ICON.CONTENTHUB.DISABLECHAT}
                  className="w-[20px] h-[20px]"
                />
              }
            >
              {showChat ? " Disable Chat" : "Enable Chat"}
            </Button>
            <Divider className="my-0" />
            <Button
              className="justify-start gap-2 p-4 h-[52px] text-left  text-sm font-inter-semibold text-secondary-main"
              startIcon={
                <Box
                  component={"img"}
                  src={ICON.CONTENTHUB.NOTALLOW}
                  className="w-[20px] h-[20px]"
                />
              }
            >
              Do not allow others to join
            </Button>
          </Box>
        </Box>
      </Box>
    </AppPopover>
  );
};

export default StreamChatPopup;
