import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useForm } from "antd/es/form/Form";
import { AppLayout } from "@layouts";
import { OtpVerificationScreen } from "@modules";
import { useAuthContext } from "@context";
import { ROUTES } from "@constants";
import { LoadingComponent } from "@components";

const OtpVerificationContainer: React.FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const {
    currentUser,
    currentUserData,
    countdown,
    setCountdown,
    handleSendOtp,
    handleResendOtp,
    handleVerifyOtp,
  } = useAuthContext();
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const [loginVerification, setLoginVerification] = useState(
    currentUser?.phoneNumber &&
      currentUser?.phoneNumber === "+" + currentUserData?.phone
  );

  useEffect(() => {
    if (currentUserData?.is2FAEnabled === undefined) {
      navigate(ROUTES.ENABLE_2FA);
    } else if (currentUserData?.is2FAEnabled === false) {
      if (currentUserData?.type) {
        navigate(ROUTES.DASHBOARD);
      } else {
        navigate(ROUTES.ONBOARDING);
      }
    } else {
      setDataLoading(false);
    }
  }, [currentUserData]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleFormFieldsChange = () => {
    const values = form.getFieldsValue();
    const errors = form.getFieldsError();

    const hasError = errors.some((field: any) => field.errors.length > 0);

    const requiredFields = ["code"];

    const hasEmpty = requiredFields.some((key: string) => {
      const value = values[key];
      return !value || value?.trim?.() === "";
    });

    const hasLength = values.code.length === 6;

    setIsFormValid(!hasError && !hasEmpty && hasLength);
  };
  const handleSendCode = () => {
    setLoading(true);
    handleSendOtp({ phone: currentUserData?.phone as string }).finally(() => {
      setLoading(false);
      setLoginVerification(false);
    });
  };
  const onSubmit = (values: any) => {
    setLoading(true);
    handleVerifyOtp({ code: values.code }).finally(() => {
      setLoading(false);
    });
  };
  const onResendOtp = () => {
    setResendLoading(true);
    if (currentUserData?.phone) {
      handleResendOtp({ phone: currentUserData?.phone }).finally(() => {
        setResendLoading(false);
      });
    } else {
      setResendLoading(false);
    }
  };
  return (
    <Fragment>
      {dataLoading ? (
        <LoadingComponent />
      ) : (
        <AppLayout>
          <Box className="bg-white-light">
            <Box className="py-[4em] lg:py-[8em] sm:px-[1em] px-[0.5em] w-full max-w-[1200px] mx-auto">
              <OtpVerificationScreen
                form={form}
                isFormValid={isFormValid}
                loading={loading}
                resendLoading={resendLoading}
                handleFormFieldsChange={handleFormFieldsChange}
                onSubmit={onSubmit}
                onResendOtp={onResendOtp}
                loginVerification={loginVerification as boolean}
                handleSendCode={handleSendCode}
              />
            </Box>
          </Box>
          <Box id="recaptcha-container"></Box>
        </AppLayout>
      )}
    </Fragment>
  );
};

export default OtpVerificationContainer;
