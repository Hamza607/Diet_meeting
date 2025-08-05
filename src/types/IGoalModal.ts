import { Dayjs } from "dayjs";

export interface IGoalModal {
  open: boolean;
  onClose: () => void;
  goalUnit: string;
  handleGoalUnitChange: (e: any) => void;
  goalDuration: string;
  customDate: Dayjs | null;
  datePickerAnchor: HTMLElement | null;
  setDatePickerAnchor: (anchor: HTMLElement | null) => void;
  handleCustomDateSelect: (date: Dayjs | null) => void;
  handleCustomButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGoalDurationChange: (date: string) => void;
}
