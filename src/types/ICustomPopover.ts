import type { PopoverOrigin } from "@mui/material";

interface ICustomPopover {
  children: React.ReactNode;
  width?: string;
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  id?: string;
  wdith?: string;
  classname?: string;

  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
}

export type {ICustomPopover}