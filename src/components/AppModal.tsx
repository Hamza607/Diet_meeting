import React from "react";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import type { IAppModal } from "@types";

const AppModal: React.FC<IAppModal> = ({
  open,
  onClose,
  contentClassName,
  children,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
          sx: {
            backgroundColor: "transparent",
          },
        },
      }}
      className="mx-2"
    >
      <Fade in={open}>
        <Box
          className={`bg-white-main modal-shadow absolute top-[50%] right-1/2 translate-x-1/2 translate-y-[-50%] !outline-0 overflow-hidden ${contentClassName}`}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppModal;
