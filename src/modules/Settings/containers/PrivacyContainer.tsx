import React from "react";
import { DashboardLayout } from "@layouts";
import { PrivacyScreen } from "@modules";
import { NavigationBar } from "@settingsComponents";

const PrivacyContainer: React.FC = () => {
  return (
    <DashboardLayout>
      <NavigationBar />
      <PrivacyScreen />
    </DashboardLayout>
  );
};

export default PrivacyContainer;
