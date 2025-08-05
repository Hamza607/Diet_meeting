import { Button } from "antd";
import type { IAppButton } from "@types";
import { Box } from "@mui/material";
import { useState } from "react";

const AppButton: React.FC<IAppButton> = ({
  children,
  className,
  disabled,
  loading,
  onClick,
  htmlType,
  styleType,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isPrimaryButton = !styleType || styleType === "primary";

  return (
    <Button
      htmlType={htmlType}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      className={`w-full h-[44px] rounded-lg text-base font-medium font-inter-medium !shadow-none relative overflow-hidden transition-all duration-300 ease-in-out ${
        styleType === "bordered"
          ? "!bg-transparent !border-primary-main !text-primary-main hover:!bg-primary-main/10"
          : styleType === "text"
          ? "!bg-transparent !border-none !text-primary-main hover:!bg-primary-main/10"
          : styleType === "disabled"
          ? "!bg-gray-thinner !border-gray-thinner !text-secondary-light !cursor-not-allowed"
          : "!bg-primary-main !border-primary-main !text-white-main"
      } ${className}`}
      onMouseEnter={() => {
        if (isPrimaryButton) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (isPrimaryButton) {
          setIsHovered(false);
        }
      }}
    >
      {!loading && (
        <Box className="z-[2] w-full h-full flex justify-center items-center transition-all duration-300 ease-in-out">
          {children}
        </Box>
      )}
      {isHovered && isPrimaryButton && !loading && (
        <Box className="absolute inset-0 bg-black-main/20 z-[1] transition-all duration-300 ease-in-out" />
      )}
    </Button>
  );
};

export default AppButton;
