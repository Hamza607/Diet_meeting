interface ISecurityScreen {
  handleEmailVerifyModalOpen: () => void;
  handlePasswordVerifyModalOpen: () => void;
  handleChangePhoneModalOpen: () => void;
}

export type { ISecurityScreen };
