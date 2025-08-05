import { Modal, Backdrop, Fade, Box } from "@mui/material";
import React from "react";
import type {ICommonModal} from "@types"

const CommonModal: React.FC<ICommonModal> = ({
  open,
  handleClose,
  children,
  contentClassName = "",
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
          className: "bg-transparent",
        },
      }}
      className="z-[1500] pointer-events-none"
      container={document.getElementById("notification-anchor") || undefined}
    >
      <Fade in={open}>
        <Box className={`${contentClassName} absolute pointer-events-auto`}>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CommonModal;
