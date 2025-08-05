import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Button, Dropdown, Input } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import type { IWeightModal } from "@types";
import { ICON, WEIGHT__UNITS } from "@constants";
import { AppButton, AppModal } from "@components";

const WeightModal: React.FC<IWeightModal> = ({
  open,
  onClose,
  weightUnit,
  handleWeightUnitChange,
}) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[549px] rounded-[12px] sm:py-[2.875rem] sm:px-[2.25rem] p-[1.25rem]"
    >
      <Box>
        <Box className="flex justify-end w-full mr-0 lg:mr-16">
          <IconButton onClick={onClose}>
            <Box component="img" src={ICON.DASHBOARD.MODALCLOSE} alt="" />
          </IconButton>
        </Box>
        <Typography variant="h3">Edit Start Current Weight</Typography>
        <Typography className="sm:text-xl text-base font-inter-semibold font-semibold text-secondary-light mb-[1em] mt-[2em]">
          What’s your{" "}
          <Box component="span" className="text-primary-main">
            start weight?
          </Box>
        </Typography>
        <Box className="flex items-center gap-4">
          <Input
            className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium text-secondary-main hover:!border-primary-main focus:!border-primary-main placeholder:text-secondary-thin"
            placeholder="0"
            maxLength={4}
          />
          <Dropdown
            menu={{ items: WEIGHT__UNITS, onClick: handleWeightUnitChange }}
            trigger={["click"]}
          >
            <Button
              onClick={(e) => e.preventDefault()}
              className="w-[70px] h-[44px] !bg-white-strong !border-secondary-light !rounded-[4px] px-3 py-1 !shadow-none text-sm font-inter-medium font-medium !text-secondary-main hover:!border-primary-main focus:!border-primary-main"
            >
              {weightUnit}
              {"  "}
              <ArrowBackIosNewIcon className="text-base text-secondary-thin -rotate-90" />
            </Button>
          </Dropdown>
        </Box>
        <Box className="flex flex-col gap-4 mt-[3em]">
          <AppButton styleType="primary" onClick={onClose}>
            Save
          </AppButton>
          <AppButton styleType="bordered" onClick={onClose}>
            Cancel
          </AppButton>
        </Box>
      </Box>
    </AppModal>
  );
};

export default WeightModal;
