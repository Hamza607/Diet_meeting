import React from "react";

interface IAppModal {
  open: boolean;
  onClose: () => void;
  contentClassName: string;
  children: React.ReactNode;
}

export type { IAppModal };
