import type { Dispatch, SetStateAction } from "react";

interface ILiveMeeting {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;
  anchorEl2: HTMLButtonElement | null;
  setAnchorEl2: Dispatch<SetStateAction<HTMLButtonElement | null>>;
  sliderSettings: object;
  handleSelectSortBy: (label: string) => void;
}

export type { ILiveMeeting };
