import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { Box } from "@mui/material";
import { AppLayout } from "@layouts";
import { ForgotPasswordScreen } from "@modules";
import { useAuthContext } from "@context";
import { ROUTES } from "@constants";

const ForgotPasswordContainer: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [form] = useForm();
  const { handleForgotUserPassword } = useAuthContext();
  const [resetLink, setResetLink] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const expireCode: string | null = searchParams.get("expireCode");

  useEffect(() => {
    if (expireCode) {
      setFormSuccess(true);
      setResetLink(true);
    }
  }, [expireCode]);

  const handleFormFieldsChange = () => {
    const values = form.getFieldsValue();
    const errors = form.getFieldsError();

    const hasError = errors.some((field: any) => field.errors.length > 0);

    const requiredFields = ["email"];

    const hasEmpty = requiredFields.some((key: string) => {
      const value = values[key];
      return !value || value?.trim?.() === "";
    });

    setIsFormValid(!hasError && !hasEmpty);
  };
  const handleResetLink = () => {
    setFormSuccess(false);
    setResetLink(false);
    navigate(ROUTES.FORGOT_PASSWORD);
  };
  const onSubmit = (values: any) => {
    setLoading(true);
    console.log(values.code);
    handleForgotUserPassword({
      email: values.email,
      setFormSuccess: setFormSuccess,
    }).finally(() => {
      setLoading(false);
      setResetLink(false);
    });
  };

  return (
    <AppLayout>
      <Box className="bg-white-light">
        <Box className="py-[4em] lg:py-[10em] sm:px-[1em] px-[0.5em] w-full max-w-[1200px] mx-auto">
          <ForgotPasswordScreen
            form={form}
            formSuccess={formSuccess}
            setFormSuccess={setFormSuccess}
            resetLink={resetLink}
            isFormValid={isFormValid}
            loading={loading}
            handleFormFieldsChange={handleFormFieldsChange}
            handleResetLink={handleResetLink}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default ForgotPasswordContainer;
