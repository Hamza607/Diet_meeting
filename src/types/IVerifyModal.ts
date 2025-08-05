interface IVerifyModal {
  open: boolean;
  onClose: () => void;
  title: string;
  handleSubmit: () => void;
}

interface ILeaveConfirmationModal {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export type { IVerifyModal, ILeaveConfirmationModal };
