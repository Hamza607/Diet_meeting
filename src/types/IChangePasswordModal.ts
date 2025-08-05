interface IChangePasswordModal {
  open: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}

export type { IChangePasswordModal };
