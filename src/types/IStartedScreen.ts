interface IStartedScreen {
  fileList: any[];
  FileListChange: (fileList: any) => void;
  handleNextButton: () => void;
}

export type { IStartedScreen };
