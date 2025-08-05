import type { FormInstance } from "antd";

interface ILoginScreen {
  form: FormInstance;
  handleFormFieldsChange: () => void;
  isFormValid: boolean;
  loading: boolean;
  onSubmit: (values: any) => void;
}

export type { ILoginScreen };
