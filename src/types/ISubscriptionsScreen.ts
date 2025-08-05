interface ISubscriptionsScreen {
  userRole: "member" | "coach";
  handleChangeMembershipModalOpen: () => void;
  handleCancelMembershipModalOpen: () => void;
}

export type { ISubscriptionsScreen };
