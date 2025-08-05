import type { NavigateFunction } from "react-router-dom";

interface ISubscriptionScreen {
  navigate: NavigateFunction;
  userRole: "member" | "coach";
  handleUserRoleChange: (role: "member" | "coach") => void;
  handleBackButton: () => void;
}

export type { ISubscriptionScreen };
