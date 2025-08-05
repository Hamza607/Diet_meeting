import type { Dispatch, SetStateAction } from "react";

interface IAnchorControl {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;
}

export type {IAnchorControl}