import React, { useState } from "react";
import { Box } from "@mui/material";
import { useForm } from "antd/es/form/Form";
import { AppLayout } from "@layouts";
import { LoginScreen } from "@modules";
import { useAuthContext } from "@context";

const LoginContainer: React.FC = () => {
  const [form] = useForm();
  const { handleLogin } = useAuthContext();
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormFieldsChange = () => {
    const values = form.getFieldsValue();
    const errors = form.getFieldsError();

    const hasError = errors.some((field: any) => field.errors.length > 0);

    const requiredFields = ["email", "password"];

    const hasEmpty = requiredFields.some((key: string) => {
      const value = values[key];
      return !value || value?.trim?.() === "";
    });

    setIsFormValid(!hasError && !hasEmpty);
  };
  const onSubmit = (values: any) => {
    setLoading(true);
    handleLogin({ email: values.email, password: values.password }).then(() => {
      setLoading(false);
    });
  };
  return (
    <AppLayout>
      <Box className="bg-white-light">
        <Box className="py-[4em] lg:py-[10em] px-[1em] w-full max-w-[1200px] mx-auto">
          <LoginScreen
            form={form}
            isFormValid={isFormValid}
            loading={loading}
            handleFormFieldsChange={handleFormFieldsChange}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default LoginContainer;
