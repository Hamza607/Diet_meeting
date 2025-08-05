interface ILogWeightModal {
  open: boolean;
  onClose: () => void;
  logWeightUnit: string;
  handleLogWeightUnitChange: (e: any) => void;
}

export type { ILogWeightModal };
