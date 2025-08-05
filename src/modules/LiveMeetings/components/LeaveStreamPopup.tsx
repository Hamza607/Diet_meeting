import { useEffect } from "react";
import { AppPopover } from "@components";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { ICON } from "@constants";
import type {ILeaveStreamPopupProps} from "@types"

const LeaveStreamPopup = ({
  setAnchorEl,
  anchorEl,
  handleClick,
}: ILeaveStreamPopupProps) => {
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
    <AppPopover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
      <Box className="min-w-[238px]" onClick={handleClick}>
        {/* Actions */}
        <Box className="px-4 py-6  md:w-[474px] cursor-pointer hover:bg-white-light">
          <Box className="flex gap-4 ">
            <Box className=" my-2 mr-2">
              <Box
                component={"img"}
                src={ICON.CONTENTHUB.LEAVEMEETING}
                className="w-[24px] h-[24px]"
              />
            </Box>
            <Box>
              <Typography className="justify-start text-left text-[20px] py-0 font-inter-semibold text-secondary-main">
                Leave Session
              </Typography>

              <Typography className="text-[16px] font-inter-regular text-secondary-light ml-1">
                You'll leave the video chat, but can still view and continue
                messaging in the chat.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </AppPopover>
  );
};

export default LeaveStreamPopup;
