import { Dayjs } from "dayjs";

interface ICommonDatePickerProps {
  open: boolean;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  onClose: () => void;
}

export type {ICommonDatePickerProps};