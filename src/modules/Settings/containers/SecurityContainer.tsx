import React, { useState } from "react";
import { DashboardLayout } from "@layouts";
import { SecurityScreen } from "@modules";
import {
  ChangeEmailModal,
  ChangePasswordModal,
  ChangePhoneModal,
  NavigationBar,
  VerifyModal,
} from "@settingsComponents";

const SecurityContainer: React.FC = () => {
  const [emailVerifyModal, setEmailVerifyModal] = useState(false);
  const [passwordVerifyModal, setPasswordVerifyModal] = useState(false);
  const [changePhoneModal, setChangePhoneModal] = useState(false);
  const [verifyPhoneModal, setVerifyPhoneModal] = useState(false);
  const [changeEmailModal, setChangeEmailModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);

  const handleEmailVerifyModalOpen = () => {
    setEmailVerifyModal(true);
  };
  const handleEmailVerifyModalClose = () => {
    setEmailVerifyModal(false);
  };
  const handleEmailVerifyModalSubmit = () => {
    setEmailVerifyModal(false);
    setChangeEmailModal(true);
  };
  const handlePasswordVerifyModalOpen = () => {
    setPasswordVerifyModal(true);
  };
  const handlePasswordVerifyModalClose = () => {
    setPasswordVerifyModal(false);
  };
  const handlePasswordVerifyModalSubmit = () => {
    setPasswordVerifyModal(false);
    setChangePasswordModal(true);
  };
  const handleChangePhoneModalOpen = () => {
    setChangePhoneModal(true);
  };
  const handleChangePhoneModalClose = () => {
    setChangePhoneModal(false);
  };
  const handleChangePhoneModalSubmit = () => {
    setChangePhoneModal(false);
    setVerifyPhoneModal(true);
  };
  const handleVerifyPhoneModalClose = () => {
    setVerifyPhoneModal(false);
  };
  const handleVerifyPhoneModalSubmit = () => {
    setVerifyPhoneModal(false);
  };
  const handleChangeEmailModalClose = () => {
    setChangeEmailModal(false);
  };
  const handleChangeEmailModalSubmit = () => {
    setChangeEmailModal(false);
  };
  const handleChangePasswordModalClose = () => {
    setChangePasswordModal(false);
  };
  const handleChangePasswordModalSubmit = () => {
    setChangePasswordModal(false);
  };
  return (
    <DashboardLayout>
      <NavigationBar />
      <SecurityScreen
        handleEmailVerifyModalOpen={handleEmailVerifyModalOpen}
        handlePasswordVerifyModalOpen={handlePasswordVerifyModalOpen}
        handleChangePhoneModalOpen={handleChangePhoneModalOpen}
      />

      {/* modals */}
      {/* change email verify modal */}
      <VerifyModal
        open={emailVerifyModal}
        onClose={handleEmailVerifyModalClose}
        title="Change email address"
        handleSubmit={handleEmailVerifyModalSubmit}
      />
      {/* change password verify modal */}
      <VerifyModal
        open={passwordVerifyModal}
        onClose={handlePasswordVerifyModalClose}
        title="Change password"
        handleSubmit={handlePasswordVerifyModalSubmit}
      />
      {/* change phone modal */}
      <ChangePhoneModal
        open={changePhoneModal}
        onClose={handleChangePhoneModalClose}
        handleSubmit={handleChangePhoneModalSubmit}
      />
      {/* verify phone modal */}
      <VerifyModal
        open={verifyPhoneModal}
        onClose={handleVerifyPhoneModalClose}
        title="Verify Phone Number"
        handleSubmit={handleVerifyPhoneModalSubmit}
      />
      {/* change email modal */}
      <ChangeEmailModal
        open={changeEmailModal}
        onClose={handleChangeEmailModalClose}
        handleSubmit={handleChangeEmailModalSubmit}
      />
      {/* change password modal */}
      <ChangePasswordModal
        open={changePasswordModal}
        onClose={handleChangePasswordModalClose}
        handleSubmit={handleChangePasswordModalSubmit}
      />
    </DashboardLayout>
  );
};

export default SecurityContainer;
