interface IHeightWeightSelection {
  feet: string;
  inches: string;
  heightUnit: string;
  weightUnit: string;
  handleFeetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInchesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleHeightUnitChange: (e: any) => void;
  handleWeightUnitChange: (e: any) => void;
  handleNextButton: () => void;
  handleBackButton: () => void;
  handleSkipButton: () => void;
}

export type { IHeightWeightSelection };
