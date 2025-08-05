import type { Dispatch, SetStateAction } from "react";

interface ChatMessage {
  id: number;
  name: string;
  avatar: string;
  message: string;
}
interface ILiveStreamPlayerProps {
  isLive: boolean;
  streamBegin: boolean;
  startUserLiveStream?: boolean;
  setStreamBegin: Dispatch<SetStateAction<boolean>>;
  startToBegin: boolean;
  setStartToBegin: Dispatch<SetStateAction<boolean>>;
  setShowChat?: Dispatch<SetStateAction<boolean>>;
  showChat?: boolean;
  videoSrc?: string;
  placeholderImage?: string;
  streamerName: string;
  chatMessages?: ChatMessage[];
  height?: string;
  stage?: boolean;
  participantCount?: number; // 1 for single user, 2 for dual user
  secondVideoSrc?: string; // Optional second video source for dual streaming
  onLeave?: () => void;
}

export type {ILiveStreamPlayerProps}