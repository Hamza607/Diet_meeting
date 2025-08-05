import { createContext, useContext, useState } from "react";
import type { IAppContext } from "@types";
import { useMessagePopups } from "@constants";

const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [generalActiveKey, setGeneralActiveKey] = useState<string | string[]>(
    ""
  );
  const [meetingsActiveKey, setMeetingsActiveKey] = useState<string | string[]>(
    ""
  );
  const [profileActiveKey, setProfileActiveKey] = useState<string | string[]>(
    ""
  );
  const [communityActiveKey, setCommunityActiveKey] = useState<
    string | string[]
  >("");
  const [subscriptionActiveKey, setSubscriptionActiveKey] = useState<
    string | string[]
  >("");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [reportModal, setReportModal] = useState<boolean>(false);
  const [reportSuccessModal, setReportSuccessModal] = useState<boolean>(false);

  const { contextHolder, errorMessage, successMessage } = useMessagePopups();

  const handleSelectCategories = (category: string) => {
    if (category === "All") {
      setCategories(["All"]);
      return;
    } else {
      const isCategorySelected = categories.includes(category);
      if (isCategorySelected) {
        setCategories((prev) =>
          prev.filter((c) => c !== category && c !== "All")
        );
      } else {
        setCategories((prev) => [...prev.filter((c) => c !== "All"), category]);
      }
    }
  };
  const handleReportModalOpen = () => {
    setReportModal(true);
  };
  const handleReportModalClose = () => {
    setReportModal(false);
  };
  const handleReportModalSubmit = () => {
    setReportModal(false);
    setReportSuccessModal(true);
  };
  const handleReportSuccessModalClose = () => {
    setReportSuccessModal(false);
  };
  const handleReportSuccessModalSubmit = () => {
    setReportSuccessModal(false);
    errorMessage({
      text: "Unable to send your report. Please check your connection and try again",
    });
  };
  const handleShareClick = () => {
    successMessage({ text: "Share link coped" });
  };

  const values: IAppContext = {
    menu,
    setMenu,
    isSearching,
    setIsSearching,
    generalActiveKey,
    setGeneralActiveKey,
    meetingsActiveKey,
    setMeetingsActiveKey,
    profileActiveKey,
    setProfileActiveKey,
    communityActiveKey,
    setCommunityActiveKey,
    subscriptionActiveKey,
    setSubscriptionActiveKey,
    categories,
    setCategories,
    reportModal,
    setReportModal,
    reportSuccessModal,
    setReportSuccessModal,
    handleReportModalOpen,
    handleReportModalClose,
    handleReportModalSubmit,
    handleReportSuccessModalClose,
    handleReportSuccessModalSubmit,
    handleSelectCategories,
    handleShareClick,
  };
  return (
    <AppContext.Provider value={values}>
      {contextHolder}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
