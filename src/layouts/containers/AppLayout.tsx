import React from "react";
import { Box } from "@mui/material";
import { AppFooter, AppHeader, AppNavMenu } from "@layoutsComponents";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box>
      <AppHeader />
      <AppNavMenu />
      {children}
      <AppFooter />
    </Box>
  );
};

export default AppLayout;
