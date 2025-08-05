import type { UploadFile } from "antd";

interface IPostScreen {
  contentId?: string | null;
  linkProduct: boolean;
  handleChangeLinkProduct: () => void;
  fileList: UploadFile[];
  handleFileListChange: (fileList: any) => void;
  handleOpenCategoryModal: () => void;
  handleCategoryClick: (category: string) => void;
}

export type { IPostScreen };
