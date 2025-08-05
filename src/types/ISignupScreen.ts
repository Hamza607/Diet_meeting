import type { FormInstance } from "antd";

interface ISignupScreen {
  form: FormInstance;
  loading: boolean;
  isFormValid: boolean;
  handleFormFieldsChange: () => void;
  onSubmit: (values: FormData) => void;
}

export type { ISignupScreen };
