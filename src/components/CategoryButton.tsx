import React from "react";
import { Button } from "@mui/material";
import type { ICategoryButton } from "@types";

const CategoryButton: React.FC<ICategoryButton> = ({
  type,
  className,
  children,
  onClick,
}) => {
  return (
    <Button
      className={`h-[32px] border-none rounded-lg py-[0.25rem] px-[0.75rem] font-inter-medium font-medium transition-all duration-300 ease-in-out ${
        type === "primary"
          ? "bg-primary-main text-white-main"
          : "bg-white-light text-primary-main hover:bg-primary-main/20"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CategoryButton;
