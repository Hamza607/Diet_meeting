import React from "react";

interface IAppButton {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset";
  styleType?: "primary" | "bordered" | "text" | "disabled" | "normal";
}

export type { IAppButton };
