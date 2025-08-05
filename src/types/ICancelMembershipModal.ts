interface ICancelMembershipModal {
  open: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}

export type { ICancelMembershipModal };
