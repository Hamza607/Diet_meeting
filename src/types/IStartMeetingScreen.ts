import type { UploadFile } from "antd";
import type { Dispatch, SetStateAction } from "react";
import type { Dayjs } from "dayjs";

interface IStartMeetingScreen {
  contentId?: string | null;
  linkProduct: boolean;
  handleChangeLinkProduct: () => void;
  fileList: UploadFile[];
  handleFileListChange: (fileList: any) => void;
  handleOpenCategoryModal: () => void;
  handleCategoryClick: (category: string) => void;
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;

  camera: boolean;
  setCamera: Dispatch<SetStateAction<boolean>>;

  scheduleMeeting: boolean;
  setScheduleMeeting: Dispatch<SetStateAction<boolean>>;

  anchorEl: HTMLButtonElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;

  cameraEl: HTMLButtonElement | null;
  setCameraEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;

  showCalendar: boolean;
  setShowCalendar: Dispatch<SetStateAction<boolean>>;

  customDate: Dayjs | null;
  setCustomDate: Dispatch<SetStateAction<Dayjs | null>>;

  datePickerAnchor: HTMLElement | null;
  setDatePickerAnchor: Dispatch<SetStateAction<HTMLElement | null>>;

  handleCustomDateSelect: (date: Dayjs | null) => void;
  handleAudioPopupClick: (e: any) => void;
  handleClickCameraDot: (e: any) => void;
}

export type { IStartMeetingScreen };
