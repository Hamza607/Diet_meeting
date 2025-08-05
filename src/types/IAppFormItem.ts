import type React from "react";
import type { SelectProps } from "antd";

interface IAppFormItem {
  type?:
    | "input"
    | "select"
    | "code"
    | "password"
    | "phone"
    | "message"
    | "date"
    | "others";
  name?: string;
  valuePropName?: string;
  placeholder?: string;
  label?: string | null;
  requiredIcon?: boolean;
  required?: boolean;
  validator?: (value: string) => Promise<void>;
  validateStatus?: "error" | "success" | "warning" | "validating" | "";
  help?: React.ReactNode;
  message?: string;
  rows?: number;
  autoSize?: { minRows: number; maxRows: number };
  maxLength?: number;
  minLength?: number;
  autoFocus?: boolean;
  allowClear?: boolean;
  readOnly?: boolean;
  onPressEnter?: () => void;
  itemClassName?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  value?: string;
  layout?: "horizontal" | "vertical";
  defaultValue?: string;
  selectOptions?: SelectProps["options"];
  onInputChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onMessageChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSelectChange?: (value: string) => void;
  onPhoneChange?: (value: string) => void;
  onVerificationChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  children?: React.ReactNode;
}

export type { IAppFormItem };
