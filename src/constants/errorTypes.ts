export const FIREBASE_ERROR = {
  INVALID_EMAIL: "auth/invalid-email",
  INVALID_CREDENTIAL: "auth/invalid-credential",
  USER_DISABLED: "auth/user-disabled",
  OTP_CODE_EXPIRED: "auth/code-expired",
  USER_NOT_EXIST: "auth/user-not-found",
  TOKEN_EXPIRES: "auth/id-token-expired",
  INVALID_PASSWORD: "auth/wrong-password",
  EMAIL_EXIST: "auth/email-already-exists",
  INVALID_PHONE: "auth/invalid-phone-number",
  SOMETHING_WENT_WRONG: "auth/something_wrong",
  NETWORK_FAILED: "auth/network-request-failed",
  AUTH_TO_MANY_REQUEST: "auth/too-many-requests",
  EMAIL_ALREADY_USED: "auth/email-already-in-use",
  INVALID_VERIFICATION_CODE: "auth/invalid-verification-code",
  INVALID_VERIFICATION_ID: "auth/invalid-verification-id",
};

export const FIREBASE_EMAIL_ERRORS = [
  FIREBASE_ERROR.INVALID_EMAIL,
  FIREBASE_ERROR.EMAIL_EXIST,
  FIREBASE_ERROR.EMAIL_ALREADY_USED,
  FIREBASE_ERROR.INVALID_CREDENTIAL,
];
export const FIREBASE_PASSWORD_ERRORS = [
  FIREBASE_ERROR.INVALID_PASSWORD,
  FIREBASE_ERROR.INVALID_CREDENTIAL,
];
export const FIREBASE_PHONE_ERRORS = [
  FIREBASE_ERROR.INVALID_PHONE,
  FIREBASE_ERROR.INVALID_VERIFICATION_CODE,
  FIREBASE_ERROR.OTP_CODE_EXPIRED,
  FIREBASE_ERROR.INVALID_VERIFICATION_ID,
];

export const ERRORS = {
  UNKNOWN_ERROR: {
    code: "unknown-error",
    message: "An unknown error occured",
  },
};
