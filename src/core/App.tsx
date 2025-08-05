import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Routes } from "@core";
import { ROUTES } from "@constants";
import { useAuthContext } from "@context";

function App() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { currentUser, currentUserData } = useAuthContext();

  const storageCode = localStorage.getItem("oobCode");
  const paramCode: string | null = searchParams.get("oobCode");
  const oobCode = paramCode || storageCode;
  const isVerified = localStorage.getItem("isVerified");

  useEffect(() => {
    if (paramCode && !storageCode) {
      localStorage.setItem("oobCode", paramCode);
    }
  }, [oobCode]);

  useEffect(() => {
    if (oobCode) {
      navigate(`${ROUTES.RESET_PASSWORD}?oobCode=${oobCode}`);
    } else if (currentUser && currentUserData) {
      if (currentUserData?.is2FAEnabled === undefined) {
        navigate(ROUTES.ENABLE_2FA);
      } else if (currentUserData?.is2FAEnabled && !isVerified) {
        navigate(ROUTES.OTP_VERIFICATION);
      } else if (!currentUserData?.type) {
        navigate(ROUTES.ONBOARDING);
      } else if (isVerified) {
        navigate(ROUTES.DASHBOARD);
      }
    }
  }, []);

  return <Routes />;
}

export default App;
