import React from "react";
import { AppLayout } from "@layouts";
import { NotFoundScreen } from "@modules";

const NotFoundContainer: React.FC = () => {
  return (
    <AppLayout>
      <NotFoundScreen />
    </AppLayout>
  );
};

export default NotFoundContainer;
