import { Backdrop, Fade, Box, Popover } from "@mui/material";
import React from "react";
import type {ICommonPopup} from "@types"


const CommonPopup: React.FC<ICommonPopup> = ({
    open,
    handleClose,
    children,
    anchorEl,
    contentClassName = "",
}) => {
    return (
        <Popover
            open={open}
            anchorReference="anchorPosition"
            anchorPosition={{ top: window.innerHeight / 2, left: window.innerWidth / 2 }}
            transformOrigin={{ vertical: 'center', horizontal: 'center' }}
            anchorEl={anchorEl}
            onClose={handleClose}
            disableRestoreFocus
            transitionDuration={300}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 300,
                className: "bg-transparent",
            }}
            PaperProps={{
               className: "shadow-none bg-transparent overflow-visible",
            }}
        >
            <Fade in={open}>
                <Box
                    className={`${contentClassName} pointer-events-none relative`}
                  
                >
                    {children}
                </Box>
            </Fade>
        </Popover>
    );
};

export default CommonPopup;
