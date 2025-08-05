import { useRef, useState } from "react";
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { AppButton, AppModal, CommonTextField } from "@components";
import { ICON } from "@constants";
import type {ILogWeightModalProps} from "@types"

const LogWeightModal = ({
  logWeight,
  setLogWeight,
  handleGoalCloseClick,
}: ILogWeightModalProps) => {
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState<"lb" | "kg">("lb");
  const modalRef = useRef<HTMLDivElement>(null);
  return (
    <AppModal
      open={logWeight}
      onClose={() => setLogWeight(false)}
      contentClassName=""
    >
      <Box
        ref={modalRef}
        className="max-h-[80vh] overflow-y-auto shadow-[0px_8px_20px_theme(colors.black.dimmest)] bg-white-main w-full lg:w-[549px] rounded-[12px] p-6"
      >
        {/* Heading */}
        <Box className="flex flex-col gap-0 relative">
          <Box className="flex justify-end w-full mr-0 lg:mr-16">
            <IconButton onClick={() => setLogWeight(false)}>
              <Box component={"img"} src={ICON.DASHBOARD.MODALCLOSE} alt="" />
            </IconButton>
          </Box>
          {/* Title */}
          <Typography className="text-[32px] lg:text-[32px] font-inter-semibold text-secondary-main  mb-10">
            Log Todays Weight
          </Typography>

          <Box className="px-2 ">
            <Typography className="text-secondary-main text-[16px] font-inter-medium ">
              Enter Today’s Weight
            </Typography>
            <Box className="flex gap-3 ">
              <CommonTextField
                value={weight}
                placeholder="0"
                onChange={setWeight}
                className="w-[70px] rounded-[4px] bg-white-strong [&_.MuiOutlinedInput-root]:!rounded-[4px]"
              />
              <Select
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value as "lb" | "kg")}
                size="small"
                className="w-[75px] h-[40px] bg-white-strong rounded-[4px] mt-2"
              >
                <MenuItem value="lb">lb</MenuItem>
                <MenuItem value="kg">kg</MenuItem>
              </Select>
            </Box>
            <Box>
              <Typography className="text-secondary-main text-[16px] font-inter-medium mb-2">
                Note (Optional)
              </Typography>
              <TextareaAutosize
                className="w-full !h-[57px] rounded font-inter-medium border border-secondary-light px-4 py-1 outline-none"
                placeholder="Enter Note (Max 100 characters)"
              />
            </Box>
            <Box className="flex flex-col gap-3 px-0  mt-6">
              <AppButton
                onClick={() => {
                  handleGoalCloseClick();
                  setLogWeight(false);
                }}
              >
                Save
              </AppButton>
              <AppButton
                styleType="bordered"
                onClick={() => setLogWeight(false)}
              >
                Cancel
              </AppButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </AppModal>
  );
};

export default LogWeightModal;
