interface IAppContext {
  menu: boolean;
  setMenu: (value: boolean) => void;
  isSearching: boolean;
  setIsSearching: (val: boolean) => void;
  generalActiveKey: string | string[];
  setGeneralActiveKey: (value: string | string[]) => void;
  meetingsActiveKey: string | string[];
  setMeetingsActiveKey: (value: string | string[]) => void;
  profileActiveKey: string | string[];
  setProfileActiveKey: (value: string | string[]) => void;
  communityActiveKey: string | string[];
  setCommunityActiveKey: (value: string | string[]) => void;
  subscriptionActiveKey: string | string[];
  setSubscriptionActiveKey: (value: string | string[]) => void;
  categories: string[];
  setCategories: (value: string[]) => void;
  reportModal: boolean;
  setReportModal: (value: boolean) => void;
  reportSuccessModal: boolean;
  setReportSuccessModal: (value: boolean) => void;
  handleReportModalOpen: () => void;
  handleReportModalClose: () => void;
  handleReportModalSubmit: () => void;
  handleReportSuccessModalClose: () => void;
  handleReportSuccessModalSubmit: () => void;
  handleSelectCategories: (label: string) => void;
  handleShareClick: () => void;
}

export type { IAppContext };
