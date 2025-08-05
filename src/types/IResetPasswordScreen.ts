import type { NavigateFunction } from "react-router-dom";
import type { FormInstance } from "antd";

interface IResetPasswordScreen {
  navigate: NavigateFunction;
  form: FormInstance;
  formSuccess: boolean;
  isFormValid: boolean;
  loading: boolean;
  handleFormFieldsChange: () => void;
  onSubmit: (values: any) => void;
}

export type { IResetPasswordScreen };
