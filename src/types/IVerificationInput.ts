interface IVerificationInput {
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  containerClassName?: string;
  inputClassName?: string;
  readOnly?: boolean;
}

export type { IVerificationInput };
