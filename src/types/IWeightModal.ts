interface IWeightModal {
  open: boolean;
  onClose: () => void;
  weightUnit: string;
  handleWeightUnitChange: (e: any) => void;
}

export type { IWeightModal };
