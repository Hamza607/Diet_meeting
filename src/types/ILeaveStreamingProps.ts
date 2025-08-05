interface ILeaveStreamPopupProps {
  setAnchorEl: (anchorEl: HTMLButtonElement | null) => void;
  anchorEl: HTMLButtonElement | null;
  handleClick: () => void;
  onLeave?: () => void;
}

export type {ILeaveStreamPopupProps}