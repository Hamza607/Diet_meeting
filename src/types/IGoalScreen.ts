import type { Dayjs } from "dayjs";

interface IGoalScreen {
  goalWeight: string;
  goalDuration: string;
  customDate: Dayjs | null;
  datePickerAnchor: HTMLElement | null;
  setDatePickerAnchor: (anchor: HTMLElement | null) => void;
  handleWeightUnitChange: (e: any) => void;
  handleGoalDurationChange: (date: string) => void;
  handleCustomDateSelect: (date: Dayjs | null) => void;
  handleCustomButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleNextButton: () => void;
  handleBackButton: () => void;
  handleSkipButton: () => void;
}

export type { IGoalScreen };
