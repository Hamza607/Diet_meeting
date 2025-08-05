import {
  AppButton,
  AppModal,
  CommonDatePicker,
  CommonTextField,
} from "@components";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  // ClickAwayListener,
  IconButton,
} from "@mui/material";
import { ICON } from "@constants";
import { useState, useRef, useEffect, Fragment } from "react";
import { Dayjs } from "dayjs";
import type {IModalGoalSetupProps} from "@types"

const ModalGoalSetups: React.FC<IModalGoalSetupProps> = ({
  open,
  onClose,
  onNext,
}) => {
  const [unit, setUnit] = useState<"ft" | "cm">("ft");
  const [weightUnit, setWeightUnit] = useState<"lb" | "kg">("lb");
  const [step, setStep] = useState(1);
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [heightCm, setHeightCm] = useState("");
  // const [currentWeight, setCurrentWeight] = useState("0");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [goalTimeline, setGoalTimeline] = useState("");
  const [customDate, setCustomDate] = useState<Dayjs | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  // :white_check_mark: Custom click-outside logic that respects MUI portals (like Select)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const popover = document.querySelector(".MuiPopover-root");
      if (
        modalRef.current &&
        !modalRef.current.contains(target) &&
        !(popover && popover.contains(target))
      ) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[640px] rounded-[12px] max-h-[80vh] overflow-y-auto shadow-[0px_8px_20px_theme(colors.black.dimmest)] bg-white-main p-6"
    >
      {/* <ClickAwayListener
                    onClickAway={onClose}
                
                > */}
      <Box ref={modalRef}>
        {/* Heading */}
        <Box className="flex flex-col gap-0 items-center relative">
          <Box className="flex justify-end w-full mr-0 lg:mr-16">
            <IconButton onClick={onClose}>
              <Box component={"img"} src={ICON.DASHBOARD.MODALCLOSE} alt="" />
            </IconButton>
          </Box>
          {/* Title */}
          <Typography className="text-[20px] lg:text-[48px] font-poppins-bold text-secondary-main text-center mb-6">
            Set Your Weight Goals
          </Typography>
        </Box>
        {/* Step Indicator */}
        <Box className="flex justify-center mb-6">
          {[1, 2, 3].map((s) => (
            <Box
              key={s}
              className={`w-[35px] h-1 rounded mx-1 transition-all duration-300 ${
                step >= s ? "bg-primary-main" : "bg-white-light"
              }`}
            />
          ))}
        </Box>
        <Box className="flex flex-col gap-0 justify-center items-center">
          {step === 1 && (
            <Fragment>
              {/* Height */}
              <Typography className="text-secondary-light text-[20px] font-inter-semibold mb-2">
                What's your{" "}
                <Box component="span" className="text-primary-main">
                  height
                </Box>
                ?
              </Typography>
              <Box className="flex gap-3 mb-2">
                {unit === "ft" ? (
                  <Fragment>
                    <CommonTextField
                      type="number"
                      value={heightFt}
                      placeholder="0 ft"
                      onChange={setHeightFt}
                      className="w-[70px] rounded-[4px] bg-white-strong [&_.MuiOutlinedInput-root]:!rounded-[4px]"
                    />
                    <CommonTextField
                      value={heightIn}
                      placeholder="0 in"
                      onChange={setHeightIn}
                      className="w-[70px] rounded-[4px] bg-white-strong [&_.MuiOutlinedInput-root]:!rounded-[4px]"
                    />
                  </Fragment>
                ) : (
                  <CommonTextField
                    value={heightCm}
                    placeholder="0 cm"
                    onChange={setHeightCm}
                    className="w-[70px] rounded-[4px]  bg-white-strong"
                  />
                )}
                <Select
                  value={unit}
                  onChange={(e) => {
                    const selected = e.target.value as "ft" | "cm";
                    setUnit(selected);
                    if (selected === "cm") {
                      setHeightFt("0");
                      setHeightIn("0");
                    } else {
                      setHeightCm("0");
                    }
                  }}
                  size="small"
                  className="w-[75px] menu_border h-[40px] !border !border-primary-main bg-white-hard rounded-[4px] mt-2 hover:bg-white-light"
                >
                  <MenuItem value="ft">ft</MenuItem>
                  <MenuItem value="cm">cm</MenuItem>
                </Select>
              </Box>
              {/* Weight */}
              <Typography className="text-secondary-light text-[20px] font-inter-semibold mb-2">
                What's your{" "}
                <Box component="span" className="text-primary-main">
                  current weight
                </Box>
                ?
              </Typography>
              <Box className="flex gap-3 mb-3">
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
            </Fragment>
          )}
          {step === 2 && (
            <Fragment>
              <Typography className="text-secondary-light text-[20px] font-inter-semibold mb-4">
                What's your{" "}
                <Box component={"span"} className="text-primary-main">
                  goal weight
                </Box>
                ?
              </Typography>
              <Box className="flex gap-2 mb-6">
                <CommonTextField
                  placeholder="0"
                  value={goalWeight}
                  onChange={setGoalWeight}
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
            </Fragment>
          )}
          {step === 3 && (
            <Fragment>
              <Typography className="text-secondary-light text-[20px] font-inter-semibold mb-4">
                When would you like to achieve your{" "}
                <Box component={"span"} className="text-primary-main">
                  goals
                </Box>
                ?
              </Typography>
              <Box className="grid grid-cols-3 gap-4 mb-6 justify-items-center">
                {["1 month", "3 months", "6 months", "1 year", "Custom"].map(
                  (label) => {
                    const isCustom = label === "Custom";
                    const isSelected =
                      goalTimeline === label || (isCustom && customDate);
                    return (
                      <Button
                        key={label}
                        variant="text"
                        className={`rounded-[8px] px-4 h-[48px] font-inter-medium
          ${
            isCustom && customDate
              ? "w-full col-span-2 "
              : " w-[100px] md:w-[129px]"
          }
          ${isSelected ? "bg-primary-main text-white-main" : "bg-white-light"}
        `}
                        onClick={() => {
                          if (isCustom) {
                            setGoalTimeline("Custom");
                            setShowCalendar(true);
                          } else {
                            setGoalTimeline(label);
                            setCustomDate(null);
                          }
                        }}
                      >
                        {isCustom && customDate
                          ? customDate.format("MMMM D YYYY")
                          : label}
                      </Button>
                    );
                  }
                )}
              </Box>
            </Fragment>
          )}
        </Box>
        {/* Buttons */}
        <Box className="flex flex-col gap-3 px-0 lg:px-16 mt-2">
          {step < 3 ? (
            <AppButton onClick={() => setStep(step + 1)}>Next</AppButton>
          ) : (
            <AppButton
              onClick={onNext} // Final submission or continue
            >
              Save my Goals
            </AppButton>
          )}
          {/* Common Date Picker Overlay */}
          <CommonDatePicker
            open={showCalendar}
            value={customDate}
            onChange={(date) => setCustomDate(date)}
            onClose={() => setShowCalendar(false)}
          />
          {step > 1 && (
            <AppButton styleType="bordered" onClick={() => setStep(step - 1)}>
              Back
            </AppButton>
          )}
          {step === 1 && (
            <AppButton styleType="bordered" onClick={onClose}>
              Skip for Now
            </AppButton>
          )}
        </Box>
      </Box>
      {/* </ClickAwayListener> */}
    </AppModal>
  );
};
export default ModalGoalSetups;
