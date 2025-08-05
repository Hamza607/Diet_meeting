import type { UploadFile } from "antd";

interface IProfileScreen {
  activeTab: string;
  fileList: UploadFile[];
  FileListChange: (fileList: any) => void;
  handleTabChange: (tab: string) => void;
  handleChangeAddressModalOpen: () => void;
  handleChangeLinksModalOpen: () => void;
  handleChangeAboutModalOpen: () => void;
}

export type { IProfileScreen };
