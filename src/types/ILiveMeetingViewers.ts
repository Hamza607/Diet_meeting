import type { Dispatch, SetStateAction } from "react";

interface ILiveMeetingViewers {
  streamBegin: boolean;
  setStreamBegin: Dispatch<SetStateAction<boolean>>;
  startToBegin: boolean;
  setStartToBegin: Dispatch<SetStateAction<boolean>>;
  showChat: boolean;
  setShowChat: Dispatch<SetStateAction<boolean>>;
}

export type { ILiveMeetingViewers };
