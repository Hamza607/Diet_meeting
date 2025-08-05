import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@constants";
import { useAuthContext } from "@context";

const SecureRoutes: React.FC = () => {
  const { currentUser, currentUserData } = useAuthContext();
  const isVerified = localStorage.getItem("isVerified");
  return (
    <Fragment>
      {currentUser && currentUserData ? (
        <Fragment>
          {currentUserData?.type && isVerified ? (
            <Outlet />
          ) : !isVerified ? (
            <Navigate to={ROUTES.OTP_VERIFICATION} />
          ) : (
            <Navigate to={ROUTES.ONBOARDING} />
          )}
        </Fragment>
      ) : (
        <Navigate to={ROUTES.ROOT} />
      )}
    </Fragment>
  );
};

export default SecureRoutes;
