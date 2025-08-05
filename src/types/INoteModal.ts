interface INoteModal {
  open: boolean;
  onClose: () => void;
  note: string;
}

export type { INoteModal };
