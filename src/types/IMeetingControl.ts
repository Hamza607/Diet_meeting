import type { Dispatch, SetStateAction } from "react";

interface IMeetingControl {
  // State variables
  streamBegin: boolean;
  startToBegin: boolean;
  setStartToBegin: Dispatch<SetStateAction<boolean>>;

  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;

  isCameraOn: boolean;
  setIsCameraOn: Dispatch<SetStateAction<boolean>>;

  anchorEl: HTMLButtonElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;

  cameraEl: HTMLButtonElement | null;
  setCameraEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;

  leaveStream: HTMLButtonElement | null;
  setLeaveStream: Dispatch<SetStateAction<HTMLButtonElement | null>>;

  onLeave?: () => void; // External leave handler
  participantCount: number;

  // Optional menu interaction handler
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickCameraDot?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleLeaveStream?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChatMenu?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type {IMeetingControl}