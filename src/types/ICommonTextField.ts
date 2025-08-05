interface ICommonInputProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  width?: number;
  className?: string;
  type?: string;
}
export type {ICommonInputProps}