import React, { useState } from "react";
import { Box } from "@mui/material";
import { useForm } from "antd/es/form/Form";
import { AppLayout } from "@layouts";
import { SignupScreen } from "@modules";
import { useAuthContext } from "@context";

const SignupContainer: React.FC = () => {
  const [form] = useForm();
  const { handleCreateNewAccount } = useAuthContext();
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormFieldsChange = () => {
    const values = form.getFieldsValue();
    const errors = form.getFieldsError();

    const hasError = errors.some((field: any) => field.errors.length > 0);

    const requiredFields = [
      "email",
      "password",
      "confirm-password",
      "terms-of-service",
    ];

    const hasEmpty = requiredFields.some((key: string) => {
      const value = values[key];
      if (key === "terms-of-service") return value !== true;
      return !value || value?.trim?.() === "";
    });

    setIsFormValid(!hasError && !hasEmpty);
  };
  const onSubmit = async (values: any) => {
    setLoading(true);
    await handleCreateNewAccount({
      email: values.email,
      password: values.password,
      phone: values.phone,
    }).then(() => setLoading(false));
  };
  return (
    <AppLayout>
      <Box className="bg-white-light">
        <Box className="py-[4em] lg:py-[6em] sm:px-[1em] px-[0.5em] w-full max-w-[1200px] mx-auto">
          <SignupScreen
            form={form}
            loading={loading}
            isFormValid={isFormValid}
            handleFormFieldsChange={handleFormFieldsChange}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default SignupContainer;
