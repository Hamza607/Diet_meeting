interface ICommonPopup {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
    anchorEl: HTMLElement | null;
    contentClassName?: string;
}
export type {ICommonPopup}