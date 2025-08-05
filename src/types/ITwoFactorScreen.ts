import type { FormInstance } from "antd";

interface ITwoFactorScreen {
  form: FormInstance;
  loading: boolean;
  skipLoading: boolean;
  isFormValid: boolean;
  formInitialValues: { phone: string | undefined };
  handleFormFieldsChange: () => void;
  onSubmit: (values: any) => void;
  handleSkipClick: () => void;
}

export type { ITwoFactorScreen };
