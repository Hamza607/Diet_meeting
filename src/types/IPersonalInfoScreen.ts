import type { UploadFile } from "antd";

interface IPersonalInfoScreen {
  fileList: UploadFile[];
  interested: string[];
  FileListChange: (fileList: any) => void;
  handleInterested: (value: string) => void;
}

export type { IPersonalInfoScreen };
