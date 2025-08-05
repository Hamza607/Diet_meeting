interface ICommonModal {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  contentClassName?: string; // optional class for styling
}
export type { ICommonModal };
