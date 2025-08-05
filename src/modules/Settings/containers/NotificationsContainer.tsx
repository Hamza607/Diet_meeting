import React from "react";
import { DashboardLayout } from "@layouts";
import { NotificationsScreen } from "@modules";
import { NavigationBar } from "@settingsComponents";

const NotificationsContainer: React.FC = () => {
  return (
    <DashboardLayout>
      <NavigationBar />
      <NotificationsScreen />
    </DashboardLayout>
  );
};

export default NotificationsContainer;
