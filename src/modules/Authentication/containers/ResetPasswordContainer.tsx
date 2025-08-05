import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useForm } from "antd/es/form/Form";
import { AppLayout } from "@layouts";
import { ResetPasswordScreen } from "@modules";
import { useAuthContext } from "@context";
import { ROUTES } from "@constants";

const ResetPasswordContainer: React.FC = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [searchParams] = useSearchParams();
  const { handleResetUserPassword } = useAuthContext();
  const [formSuccess, setFormSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const oobCode = searchParams.get("oobCode");

  useEffect(() => {
    if (!oobCode) {
      navigate(ROUTES.LOGIN);
    }
  }, [oobCode]);

  const handleFormFieldsChange = () => {
    const values = form.getFieldsValue();
    const errors = form.getFieldsError();

    const hasError = errors.some((field: any) => field.errors.length > 0);

    const requiredFields = ["password", "confirm-password"];

    const hasEmpty = requiredFields.some((key: string) => {
      const value = values[key];
      return !value || value?.trim?.() === "";
    });

    setIsFormValid(!hasError && !hasEmpty);
  };
  const onSubmit = (values: any) => {
    if (!oobCode) return;
    setLoading(true);
    console.log(values.code);
    handleResetUserPassword({
      oobCode: oobCode,
      password: values.password,
      setFormSuccess: setFormSuccess,
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <AppLayout>
      <Box className="py-[4em] lg:py-[10em] sm:px-[1em] px-[0.5em] w-full max-w-[1200px] mx-auto">
        <ResetPasswordScreen
          navigate={navigate}
          form={form}
          formSuccess={formSuccess}
          isFormValid={isFormValid}
          loading={loading}
          handleFormFieldsChange={handleFormFieldsChange}
          onSubmit={onSubmit}
        />
      </Box>
    </AppLayout>
  );
};

export default ResetPasswordContainer;
