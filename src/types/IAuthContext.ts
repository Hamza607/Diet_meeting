import type { MockUser as AuthUser, MockUserData as DocumentData } from "@libs";

export interface IAuthContext {
  currentUser: AuthUser | null;
  setCurrentUser: (user: AuthUser | null) => void;
  currentUserData: DocumentData | null;
  setCurrentUserData: (userData: DocumentData | null) => void;
  error: string;
  setError: (error: string) => void;
  confirmId: string;
  setConfirmId: (confirmId: string) => void;
  countdown: number;
  setCountdown: (countdown: number) => void;
  handleCreateNewAccount: (data: IHandleCreateNewAccount) => Promise<void>;
  handleLogin: (data: IHandleLogin) => Promise<void>;
  handleSendOtp: (data: IHandleSendOtp) => Promise<void>;
  handleResendOtp: (data: IHandleSendOtp) => Promise<void>;
  handleVerifyOtp: (data: IHandleVerifyOtp) => Promise<void>;
  handleForgotUserPassword: (data: IHandleForgotUserPassword) => Promise<void>;
  handleResetUserPassword: (data: IHandleResetUserPassword) => Promise<void>;
  handleLogoutUser: () => Promise<void>;
  getCurrentUserData: (data: IGetCurrentUserData) => Promise<() => void>;
  handleUpdateUserInfo: (data: IHandleUpdateUserInfo) => Promise<void>;
}

export interface IHandleCreateNewAccount {
  email: string;
  password: string;
  phone: string;
}

export interface IHandleLogin {
  email: string;
  password: string;
}

export interface IHandleSendOtp {
  phone: string;
}

export interface IHandleVerifyOtp {
  code: string;
}

export interface IHandleForgotUserPassword {
  email: string;
  setFormSuccess: (success: boolean) => void;
}

export interface IHandleResetUserPassword {
  oobCode: string;
  password: string;
  setFormSuccess: (success: boolean) => void;
}

export interface IGetCurrentUserData {
  userId: string;
}

export interface IHandleUpdateUserInfo {
  userId: string;
  data: Partial<DocumentData>;
}
