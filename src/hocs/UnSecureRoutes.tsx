import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@constants";
import { useAuthContext } from "@context";

const UnSecureRoutes: React.FC = () => {
  const { currentUser, currentUserData } = useAuthContext();
  return (
    <Fragment>
      {!currentUser && !currentUserData ? (
        <Outlet />
      ) : (
        <Navigate to={ROUTES.DASHBOARD} />
      )}
    </Fragment>
  );
};

export default UnSecureRoutes;
