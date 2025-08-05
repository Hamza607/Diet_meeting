import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box, ClickAwayListener, Paper } from "@mui/material";
import type { ICommonDatePickerProps } from "@types";

const CommonDatePicker: React.FC<ICommonDatePickerProps> = ({
  open,
  value,
  onChange,
  onClose,
}) => {
  if (!open) return null;

  return (
    <Box className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[3000]">
      <ClickAwayListener onClickAway={onClose}>
        <Box className="bg-white-main p-0 rounded-[12px]  w-[256px] relative shadow-[0px_8px_20px_rgba(0,0,8,0.25)]">
          <Paper elevation={0} className="rounded-[4px] bg-white-main">
            <StaticDatePicker
              value={value}
              disablePast
              onChange={(newDate) => {
                if (newDate) {
                  onChange(newDate);
                  onClose();
                }
              }}
              displayStaticWrapperAs="desktop"
              slotProps={{
                actionBar: { actions: [] },
                toolbar: { hidden: true },
              }}
              className="custom-datepicker"
            />
          </Paper>
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default CommonDatePicker;
