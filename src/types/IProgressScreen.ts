interface IProgressScreen {
  handleWeightCardClick: (id: string) => void;
  handleLogWeightModalOpen: () => void;
  handleNoteModalOpen: () => void;
  setNote: (note: string) => void;
}

export type { IProgressScreen };
