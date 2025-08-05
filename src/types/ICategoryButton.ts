import type React from "react";

interface ICategoryButton {
  type: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export type { ICategoryButton };
