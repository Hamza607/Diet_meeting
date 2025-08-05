import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useForm } from "antd/es/form/Form";
import { AppLayout } from "@layouts";
import { TwoFactorScreen } from "@modules";
import { useAuthContext } from "@context";
import { ROUTES } from "@constants";
import { LoadingComponent } from "@components";

const TwoFactorContainer: React.FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const { currentUser, currentUserData, handleUpdateUserInfo, handleSendOtp } =
    useAuthContext();
  const [dataLoading, setDataLoading] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [skipLoading, setSkipLoading] = useState(false);
  const [formInitialValues, setFormInitialValues] = useState<{
    phone: string;
  }>({
    phone: "",
  });

  useEffect(() => {
    if (!currentUser && !currentUserData) {
      navigate(ROUTES.LOGIN);
    }
  }, [currentUser, currentUserData]);

  useEffect(() => {
    setFormInitialValues({ phone: currentUserData?.phone as string });
    setIsFormValid(true);
    setDataLoading(false);
  }, [currentUserData]);

  const handleFormFieldsChange = () => {
    const values = form.getFieldsValue();
    const errors = form.getFieldsError();

    const hasError = errors.some((field: any) => field.errors.length > 0);

    const requiredFields = ["phone"];

    const hasEmpty = requiredFields.some((key: string) => {
      const value = values[key];
      return !value || value?.trim?.() === "";
    });

    setIsFormValid(!hasError && !hasEmpty);
  };
  const onSubmit = (values: any) => {
    setLoading(true);
    console.log("values", values);
    if (currentUser) {
      handleSendOtp({ phone: values.phone }).then(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  };
  const handleSkipClick = () => {
    setSkipLoading(true);
    if (currentUser) {
      handleUpdateUserInfo({
        userId: currentUser?.uid,
        data: { is2FAEnabled: false },
      }).then(() => {
        navigate(ROUTES.ONBOARDING);
        setSkipLoading(false);
      });
    } else {
      setSkipLoading(false);
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
              <TwoFactorScreen
                form={form}
                loading={loading}
                skipLoading={skipLoading}
                isFormValid={isFormValid}
                formInitialValues={formInitialValues}
                handleFormFieldsChange={handleFormFieldsChange}
                onSubmit={onSubmit}
                handleSkipClick={handleSkipClick}
              />
            </Box>
          </Box>
          <Box id="recaptcha-container"></Box>
        </AppLayout>
      )}
    </Fragment>
  );
};

export default TwoFactorContainer;
