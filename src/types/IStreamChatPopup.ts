import type { Dispatch, SetStateAction } from "react";

interface IStreamChatPopup {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;
  showChat?: boolean;
  setShowChat?: Dispatch<SetStateAction<boolean>>;
}

export type { IStreamChatPopup };
