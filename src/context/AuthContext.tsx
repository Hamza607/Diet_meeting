import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type {
  IAuthContext,
  IGetCurrentUserData,
  IHandleCreateNewAccount,
  IHandleForgotUserPassword,
  IHandleLogin,
  IHandleResetUserPassword,
  IHandleSendOtp,
  IHandleUpdateUserInfo,
  IHandleVerifyOtp,
} from "@types";
import { useFirebaseAuth } from "@hooks";
import { ROUTES, useMessagePopups } from "@constants";
import type { User } from "@collections";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(() => {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  });
  const [currentUserData, setCurrentUserData] = useState<User | null>(() => {
    return JSON.parse(localStorage.getItem("currentUserData") || "null");
  });
  const [error, setError] = useState<string>("");
  const [confirmId, setConfirmId] = useState<string>("");
  const [countdown, setCountdown] = useState<number>(0);

  const navigate = useNavigate();
  const {
    createNewAccount,
    loginUser,
    getUserCollection,
    updateUserInfo,
    sendOtp,
    verifyOTP,
    forgotUserPassword,
    resetUserPassword,
    logoutUser,
  } = useFirebaseAuth();
  const { contextHolder } = useMessagePopups();

  const handleCreateNewAccount = async ({
    email,
    password,
    phone,
  }: IHandleCreateNewAccount) => {
    try {
      const response: any = await createNewAccount({
        email: email,
        password: password,
        phone: phone,
      });
      setCurrentUser({ ...response.user, password: password });
      window.localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...response.user, password: password })
      );
      setError("");
      getCurrentUserData({ userId: response.user.uid });
      navigate(ROUTES.DASHBOARD);
    } catch (error: any) {
      console.log("error ====>>", error);
      setError(error);
    }
  };
  const handleLogin = async ({ email, password }: IHandleLogin) => {
    try {
      const response: any = await loginUser({
        email: email,
        password: password,
      });
      setCurrentUser({ ...response.user, password: password });
      window.localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...response.user, password: password })
      );
      setError("");
      getCurrentUserData({ userId: response.user.uid });
      navigate(ROUTES.DASHBOARD);
    } catch (error: any) {
      console.log("error ====>>", error);
      setError(error);
    }
  };
  const handleSendOtp = async ({ phone }: IHandleSendOtp) => {
    try {
      await sendOtp({
        phoneNumber: `+${phone}`,
        setConfirmId: setConfirmId,
      });
      await updateUserInfo({
        userId: currentUser?.uid as string,
        data: { phone: phone, is2FAEnabled: true },
      });
      navigate(ROUTES.DASHBOARD);
      setError("");
      setCountdown(60);
    } catch (err: any) {
      console.log("Error while sending otp", err.code);
      setError(err.code);
    }
  };
  const handleResendOtp = async ({ phone }: IHandleSendOtp) => {
    if (countdown > 0) return;
    try {
      await sendOtp({
        phoneNumber: `+${phone}`,
        setConfirmId: setConfirmId,
      });
      setCountdown(60);
    } catch (err: any) {
      console.log("Error while resending otp", err.code);
      setError(err.code);
    }
  };
  const handleVerifyOtp = async ({ code }: IHandleVerifyOtp) => {
    try {
      await verifyOTP({
        code: code,
        confirmId: confirmId,
      });
      navigate(ROUTES.DASHBOARD);
      setConfirmId("");
      window.localStorage.setItem("isVerified", "true");
    } catch (error: any) {
      console.log("Error while verifying otp", error);
      setError(error);
    }
  };
  const handleForgotUserPassword = async ({
    email,
    setFormSuccess,
  }: IHandleForgotUserPassword) => {
    try {
      await forgotUserPassword({ email: email });
      setFormSuccess(true);
    } catch (error: any) {
      console.log("error ====>>", error);
      setError(error);
    }
  };
  const handleResetUserPassword = async ({
    oobCode,
    password,
    setFormSuccess,
  }: IHandleResetUserPassword) => {
    try {
      await resetUserPassword({
        oobCode: oobCode,
        password: password,
      });
      setFormSuccess(true);
      if (currentUser) {
        await handleLogoutUser();
      } else {
        window.localStorage.removeItem("oobCode");
      }
    } catch (error: any) {
      console.log("error ====>>", error);
      if (error) {
        navigate(`${ROUTES.FORGOT_PASSWORD}?expireCode=true`);
        window.localStorage.removeItem("oobCode");
      }
      setError(error);
    }
  };
  const handleLogoutUser = async () => {
    try {
      await logoutUser();
      setCurrentUser(null);
      setCurrentUserData(null);
      window.localStorage.removeItem("currentUser");
      window.localStorage.removeItem("currentUserData");
      window.localStorage.removeItem("oobCode");
      window.localStorage.removeItem("isVerified");
      navigate(ROUTES.LOGIN);
    } catch (error: any) {
      console.log("error ====>>", error);
      setError(error);
    }
  };
  const getCurrentUserData = async ({ userId }: IGetCurrentUserData) => {
    const unsubscribe = getUserCollection({
      userUid: userId,
      onUpdate: (data: User) => {
        if (data) {
          setCurrentUserData(data);
          window.localStorage.setItem("currentUserData", JSON.stringify(data));
        } else {
          setCurrentUserData(null);
        }
      },
    });

    // Return the unsubscribe function to stop listening when needed
    return unsubscribe;
  };
  const handleUpdateUserInfo = async ({
    userId,
    data,
  }: IHandleUpdateUserInfo) => {
    try {
      const response: any = await updateUserInfo({
        userId: userId,
        data: data,
      });
      console.log("response ====>>", response);
    } catch (error: any) {
      console.log("error ====>>", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getCurrentUserData({ userId: currentUser?.uid });
    }
  }, [currentUser]);

  const values: any = {
    currentUser,
    setCurrentUser,
    currentUserData,
    setCurrentUserData,
    error,
    setError,
    confirmId,
    setConfirmId,
    countdown,
    setCountdown,
    handleCreateNewAccount,
    handleLogin,
    handleSendOtp,
    handleResendOtp,
    handleVerifyOtp,
    handleForgotUserPassword,
    handleResetUserPassword,
    handleLogoutUser,
    getCurrentUserData,
    handleUpdateUserInfo,
  };
  return (
    <AuthContext.Provider value={values}>
      {contextHolder}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
