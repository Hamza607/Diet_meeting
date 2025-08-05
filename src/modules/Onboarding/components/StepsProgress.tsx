import React from "react";
import type { IStepsProgress } from "@types";
import { Box } from "@mui/material";

const StepsProgress: React.FC<IStepsProgress> = ({ steps }) => {
  return (
    <Box className="flex justify-center items-center gap-2 pt-[5em]">
      <Box className="w-[35px] h-[6px] rounded-[100px] bg-white-main overflow-hidden relative">
        <Box className="w-full h-full bg-gradient-to-r from-primary-hard to-primary-light absolute left-0"></Box>
      </Box>
      <Box className="w-[35px] h-[6px] rounded-[100px] bg-white-main overflow-hidden">
        <Box
          className={`${
            steps > 2 ? "w-full" : "w-0"
          } h-full bg-gradient-to-r from-primary-hard to-primary-light transition-all duration-500 ease-in-out`}
        ></Box>
      </Box>
      <Box className="w-[35px] h-[6px] rounded-[100px] bg-white-main overflow-hidden">
        <Box
          className={`${
            steps > 4 ? "w-full" : "w-0"
          } h-full bg-gradient-to-r from-primary-hard to-primary-light transition-all duration-500 ease-in-out`}
        ></Box>
      </Box>
      <Box className="w-[35px] h-[6px] rounded-[100px] bg-white-main overflow-hidden">
        <Box
          className={`${
            steps > 6 ? "w-full" : "w-0"
          } h-full bg-gradient-to-r from-primary-hard to-primary-light transition-all duration-500 ease-in-out`}
        ></Box>
      </Box>
      <Box className="w-[35px] h-[6px] rounded-[100px] bg-white-main overflow-hidden">
        <Box
          className={`${
            steps > 7 ? "w-full" : "w-0"
          } h-full bg-gradient-to-r from-primary-hard to-primary-light transition-all duration-500 ease-in-out`}
        ></Box>
      </Box>
      <Box className="w-[35px] h-[6px] rounded-[100px] bg-white-main overflow-hidden">
        <Box
          className={`${
            steps > 9 ? "w-full" : "w-0"
          } h-full bg-gradient-to-r from-primary-hard to-primary-light transition-all duration-500 ease-in-out`}
        ></Box>
      </Box>
    </Box>
  );
};

export default StepsProgress;
