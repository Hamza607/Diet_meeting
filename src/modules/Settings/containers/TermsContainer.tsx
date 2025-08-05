import React from "react";
import { DashboardLayout } from "@layouts";
import { TermsScreen } from "@modules";
import { NavigationBar } from "@settingsComponents";

const TermsContainer: React.FC = () => {
  return (
    <DashboardLayout>
      <NavigationBar />
      <TermsScreen />
    </DashboardLayout>
  );
};

export default TermsContainer;
