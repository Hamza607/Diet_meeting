import type { FormInstance } from "antd";

interface IForgotPasswordScreen {
  form: FormInstance;
  formSuccess: boolean;
  setFormSuccess: (value: boolean) => void;
  isFormValid: boolean;
  loading: boolean;
  resetLink: boolean;
  handleFormFieldsChange: () => void;
  handleResetLink: () => void;
  onSubmit: (values: any) => void;
}

export type { IForgotPasswordScreen };
