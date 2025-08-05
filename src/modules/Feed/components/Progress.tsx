import { Box, LinearProgress, Typography } from "@mui/material";
import { ModalGoalSetups, LogWeightModal } from "@feedComponents";
import React, { useState } from "react";
import { AppButton } from "@components";
import { useNavigate } from "react-router-dom";

const Progress: React.FC = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [logWeight, setLogWeight] = useState(false);
  const navigate = useNavigate();

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleGoalCloseClick = () => {
    setShowProgress(false);
    setShowModal(false);
  };

  return (
    <Box className="bg-white rounded-lg relative pe-4">
      <Typography className="text-secondary-main text-[20px] lg:text-[48px] font-poppins-bold">
        Welcome John!
      </Typography>
      {/* Progress card */}
      {!showProgress ? (
        // Initial view with "Set Your Goal" button
        <Box className="relative flex flex-col mt-3 border-[1px] border-solid border-primary-main rounded-[12px] p-[20px] w-full lg:w-[236px] gap-4">
          <Typography className="text-secondary-main text-[20px] font-[600]">
            Your Progress
          </Typography>
          <Box>
            <ModalGoalSetups
              open={showModal}
              onClose={() => setShowModal(false)}
              onNext={() => setShowProgress(true)}
            />
          </Box>
          <AppButton onClick={handleModalOpen}>Set Your Goal</AppButton>
        </Box>
      ) : (
        // Progress tracking UI
        <Box className="border-[1px] border-solid border-primary-main rounded-[12px] p-2 lg:p-5 w-full flex flex-col gap-2">
          <Box className="flex items-center justify-between">
            <Typography className="text-secondary-main text-[20px] font-inter-semibold">
              Your Progress
            </Typography>
            <Box className="flex gap-2 items-center">
              <AppButton
                // onClick={handleGoalCloseClick}
                onClick={() => navigate("/dashboard/progress")}
                className="md:!w-[162px] !w-[100px] h-[32px] py-1 px-3 text-[9px] md:text-sm font-inter-medium  "
              >
                View All Progress
              </AppButton>
              <AppButton
                // onClick={handleGoalCloseClick}
                onClick={() => setLogWeight(true)}
                className="md:!w-[162px] !w-[100px] h-[32px] py-1 px-3 text-[9px] md:text-sm font-inter-medium  "
              >
                Log Today's Weight
              </AppButton>
            </Box>
          </Box>

          <Typography className="text-secondary-main text-[10px] lg:text-[20px] font-inter-regular">
            Weight Goal
          </Typography>

          <LinearProgress
            variant="determinate"
            value={50}
            className="h-[12px] rounded-[10px] bg-gray-thinner [&>.MuiLinearProgress-bar]:bg-primary-main [&>.MuiLinearProgress-bar]:rounded-[10px]"
          />

          <Box className="flex justify-between   font-inter-regular">
            <Box>
              <Typography className="text-[16px] font-inter-regular font-normal text-secondary-main">
                144 Lbs
              </Typography>
              <Typography className="text-[12px] font-inter-regular font-normal text-secondary-light">
                June 12, 2025
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography className="text-[16px] font-inter-regular font-normal text-secondary-main">
                174 Lbs
              </Typography>
            </Box>
            <Box className="text-right">
              <Typography className="text-[16px] font-inter-regular font-normal text-secondary-main">
                180 Lbs
              </Typography>
              <Typography className="text-[12px] font-inter-regular font-normal text-secondary-main">
                October 1st 2025
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      <LogWeightModal
        logWeight={logWeight}
        setLogWeight={setLogWeight}
        handleGoalCloseClick={handleGoalCloseClick}
      />
    </Box>
  );
};

export default Progress;
