interface IProgressChart {
  width?: number;
  height?: number;
  handleNoteModalOpen: () => void;
  setNote: (note: string) => void;
}
interface DataPoint {
  date: Date;
  weight: number;
}
interface Note {
  date: Date;
  text: string;
}

export type { IProgressChart, DataPoint, Note };
