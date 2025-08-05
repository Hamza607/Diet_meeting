import { AppButton, AppModal } from "@components";
import { Box, Typography, ClickAwayListener } from "@mui/material";
import { ICON } from "@constants";
import { Fragment } from "react/jsx-runtime";
import type {IDeleteModalProps} from "@types"


const DeleteTableDataModal: React.FC<IDeleteModalProps> = ({
  open,
  onClose,
  text,
  buttontext,
  leave,
}) => {
  return (
    <Fragment>
      <AppModal
        open={open}
        onClose={onClose}
        contentClassName="w-full max-w-[534px]  rounded-[20px] p-[12px] "
      >
        <ClickAwayListener onClickAway={onClose}>
          <Box>
            <Box className="flex flex-col gap-4  relative">
              {/* Title */}
              <Box className="flex gap-2 pt-2 items-center">
                <Box
                  component={"img"}
                  src={ICON.CONTENTHUB.REPORTICON}
                  className="w-[27px] h-[27px]"
                ></Box>
                <Typography className="text-xs font-inter-medium text-secondary-main">
                  {text}
                </Typography>
              </Box>
              {/* Buttons */}
              <Box className="flex flex-col gap-3 ">
                <AppButton>{buttontext}</AppButton>
                {leave ? (
                  <AppButton styleType="bordered" onClick={onClose}>
                    Leave the Page
                  </AppButton>
                ) : (
                  <AppButton styleType="bordered" onClick={onClose}>
                    Cancel
                  </AppButton>
                )}
              </Box>
            </Box>
          </Box>
        </ClickAwayListener>
      </AppModal>
    </Fragment>
  );
};

export default DeleteTableDataModal;
