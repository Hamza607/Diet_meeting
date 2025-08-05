import type { FormInstance } from "antd/es/form";

interface IOtpVerificationScreen {
  form: FormInstance;
  isFormValid: boolean;
  loading: boolean;
  resendLoading: boolean;
  handleFormFieldsChange: () => void;
  onSubmit: (values: any) => void;
  onResendOtp: () => void;
  loginVerification: boolean;
  handleSendCode: () => void;
}

export type { IOtpVerificationScreen };
