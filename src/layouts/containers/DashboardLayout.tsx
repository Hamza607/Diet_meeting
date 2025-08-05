// import { DashboardHeader, DashboardSidebar } from "@layoutsComponents";
// import React from "react";
// import { useState } from "react";

// const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // is used to toggle the sidebar menu in full screen mode
//   const [sidebarMenuOpen, setSidebarMenuOpen] = useState(true);

//   // handle sidebar toggle
//   const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

//   // handle sidebar menu toggle
//   const handleSidebarMenuToggle = () => setSidebarMenuOpen(!sidebarMenuOpen);

//   return (
//     <Box className="min-h-screen flex flex-col relative">
//       {/* Full-width Header */}
//       <DashboardHeader
//         onToggleSidebar={handleSidebarToggle}
//         sidebarOpen={sidebarOpen}
//         onToggleSidebarMenu={handleSidebarMenuToggle}
//         sidebarMenuOpen={sidebarMenuOpen}
//       />

//       {/* Sidebar and Main Content Wrapper */}
//       <Box className="flex flex-1">
//         {/* Desktop Sidebar */}
//         {sidebarMenuOpen && (
//           <Box
//             className="z-40 hidden lg:flex sticky w-64"
//           >
//             <DashboardSidebar />
//           </Box>
//         )}
//         {/* <Box
//           className="z-40 hidden lg:flex sticky top-[88px] h-[calc(100vh-88px)] w-64 bg-white border-r"
//         >
//           <DashboardSidebar />
//         </Box> */}

//         {/* Mobile Sidebar */}
//         {sidebarOpen && (
//           <Box className={`fixed top-[292px] left-0 z-20 w-full h-full bg-white-main border-r lg:hidden transition-transform duration-300 ease-in-out
//     ${sidebarOpen ? '' : '-translate-x-full'} lg:translate-x-0`}
//           >
//             <DashboardSidebar />
//           </Box>
//         )}

//         {/* Main Content */}
//         <main className="flex-1 p-3 md:p-6 lg:py-6 lg:px-2 mt-32 lg:mt-20 bg-white overflow-y-auto z-10">
//           {children}
//         </main>
//       </Box>
//     </Box>
//   );
// };

// export default DashboardLayout;

import { DashboardHeader, DashboardSidebar } from "@layoutsComponents";
import { Box } from "@mui/material";
import { ROUTES } from "@constants";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // <-- import this
import { ReportModal, ReportSuccessModal } from "@components";
import { useAppContext } from "@context";
import { SearchScreen } from "@modules";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    reportModal,
    handleReportModalClose,
    handleReportModalSubmit,
    reportSuccessModal,
    handleReportSuccessModalClose,
    handleReportSuccessModalSubmit,
    isSearching,
  } = useAppContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState(true);

  const viewerPaths = [
    /^\/dashboard\/live-meetings\/viewer\/\d+$/,
    /^\/dashboard\/recorded-content\/viewer\/\d+$/,
    /^\/dashboard\/uploaded-content\/viewer\/\d+$/,
    /^\/dashboard\/start-live-meeting\/viewer\/\d+$/,
  ];

  const location = useLocation();

  // const isViewerPage = /^\/dashboard\/live-meetings\/viewer\/\d+$/.test(location.pathname);

  const isViewerPage = viewerPaths.some((regex) =>
    regex.test(location.pathname)
  );

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  const handleSidebarMenuToggle = () => setSidebarMenuOpen(!sidebarMenuOpen);

  useEffect(() => {
    setSidebarMenuOpen(!isViewerPage);
  }, [isViewerPage]);

  return (
    <Box className="min-h-screen flex flex-col relative">
      {/* Full-width Header */}
      <DashboardHeader
        onToggleSidebar={handleSidebarToggle}
        sidebarOpen={sidebarOpen}
        onToggleSidebarMenu={handleSidebarMenuToggle}
        sidebarMenuOpen={sidebarMenuOpen}
      />

      {/* Sidebar and Main Content Wrapper */}
      <Box className="flex flex-1">
        {/* Desktop Sidebar */}
        {!isViewerPage && sidebarMenuOpen && (
          <Box
            className={`z-40 hidden lg:flex ${
              !isViewerPage ? " sticky" : "fixed"
            }  w-64`}
          >
            <DashboardSidebar />
          </Box>
        )}

        {/* Viewer Page Sidebar - Mobile Style */}
        {isViewerPage && sidebarMenuOpen && (
          <Box
            className={`z-40 hidden lg:flex ${
              !isViewerPage ? " sticky" : "fixed"
            }  w-64`}
          >
            <DashboardSidebar />
          </Box>
        )}

        {/* Mobile Sidebar */}
        {!isViewerPage && sidebarOpen && (
          <Box
            className={`fixed top-[292px] left-0 z-20 w-full h-full bg-white-main border-r lg:hidden transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "" : "-translate-x-full"} lg:translate-x-0`}
          >
            <DashboardSidebar />
          </Box>
        )}

        {/* Main Content */}
        <Box
          className={`flex-1 p-3 md:p-6 lg:py-6 lg:px-2 mt-32 lg:mt-20 bg-white overflow-y-auto z-10 ${
            location.pathname === ROUTES.DASHBOARD_MESSAGES ? "!pb-0" : ""
          }`}
        >
          {isSearching && location.pathname !== ROUTES.DASHBOARD_FORUM ? (
            <SearchScreen />
          ) : (
            <>{children}</>
          )}
        </Box>
      </Box>
      {/* Modals */}
      <ReportModal
        open={reportModal}
        onClose={handleReportModalClose}
        handleSubmit={handleReportModalSubmit}
      />
      <ReportSuccessModal
        open={reportSuccessModal}
        onClose={handleReportSuccessModalClose}
        handleSubmit={handleReportSuccessModalSubmit}
      />
    </Box>
  );
};

export default DashboardLayout;
