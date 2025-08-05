import type { UploadFile } from "antd";
import type { Dayjs } from "dayjs";
import type { Dispatch, RefObject, SetStateAction } from "react";

interface IUploadedContentScreen {
  contentId?: string | null;
  linkProduct: boolean;
  handleChangeLinkProduct: () => void;
  fileList: UploadFile[];
  handleFileListChange: (fileList: any) => void;
  handleOpenCategoryModal: () => void;
  handleCategoryClick: (category: string) => void;

  scheduleMeeting: boolean;
  setScheduleMeeting: Dispatch<SetStateAction<boolean>>;

  customDate: Dayjs | null;
  setCustomDate: Dispatch<SetStateAction<Dayjs | null>>;

  datePickerAnchor: HTMLElement | null;
  setDatePickerAnchor: Dispatch<SetStateAction<HTMLElement | null>>;

  fileInputRef: RefObject<HTMLInputElement | null>;
  videoUrl: string | null;
  handleButtonClick: () => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomDateSelect: (date: Dayjs | null) => void;
}

export type { IUploadedContentScreen };
