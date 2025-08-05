import React, { useState } from "react";
import { DashboardLayout } from "@layouts";
import { SubscriptionsScreen } from "@modules";
import {
  CancelMembershipModal,
  ChangeMembershipModal,
  NavigationBar,
} from "@settingsComponents";

const SubscriptionsContainer: React.FC = () => {
  const [userRole, setUserRole] = useState<"member" | "coach">("member");
  const [changeMembershipModal, setChangeMembershipModal] = useState(false);
  const [cancelMembershipModal, setCancelMembershipModal] = useState(false);

  const handleChangeMembershipModalOpen = () => {
    setChangeMembershipModal(true);
  };
  const handleChangeMembershipModalClose = () => {
    setChangeMembershipModal(false);
  };
  const handleChangeMembershipModalSubmit = () => {
    setChangeMembershipModal(false);
    setUserRole("coach");
  };
  const handleCancelMembershipModalOpen = () => {
    setCancelMembershipModal(true);
  };
  const handleCancelMembershipModalClose = () => {
    setCancelMembershipModal(false);
  };
  const handleCancelMembershipModalSubmit = () => {
    setCancelMembershipModal(false);
    setUserRole("member");
  };
  return (
    <DashboardLayout>
      <NavigationBar />
      <SubscriptionsScreen
        userRole={userRole}
        handleChangeMembershipModalOpen={handleChangeMembershipModalOpen}
        handleCancelMembershipModalOpen={handleCancelMembershipModalOpen}
      />
      {/* modals */}
      <ChangeMembershipModal
        open={changeMembershipModal}
        onClose={handleChangeMembershipModalClose}
        handleSubmit={handleChangeMembershipModalSubmit}
      />
      <CancelMembershipModal
        open={cancelMembershipModal}
        onClose={handleCancelMembershipModalClose}
        handleSubmit={handleCancelMembershipModalSubmit}
      />
    </DashboardLayout>
  );
};

export default SubscriptionsContainer;
