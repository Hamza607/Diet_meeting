import React, { useState } from "react";
import { DashboardLayout } from "@layouts";
import { ProfileScreen } from "@modules";
import {
  ChangeAboutModal,
  ChangeAddressModal,
  ChangeLinksModal,
} from "@profileComponents";
import type { UploadFile } from "antd";

const ProfileContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("uploadedContent");
  const [changeAddressModal, setChangeAddressModal] = useState<boolean>(false);
  const [changeLinksModal, setChangeLinksModal] = useState(false);
  const [changeAboutModal, setChangeAboutModal] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const FileListChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  const handleChangeAddressModalOpen = () => {
    setChangeAddressModal(true);
  };
  const handleChangeAddressModalClose = () => {
    setChangeAddressModal(false);
  };
  const handleChangeAddressModalSubmit = () => {
    setChangeAddressModal(false);
  };
  const handleChangeLinksModalOpen = () => {
    setChangeLinksModal(true);
  };
  const handleChangeLinksModalClose = () => {
    setChangeLinksModal(false);
  };
  const handleChangeLinksModalSubmit = () => {
    setChangeLinksModal(false);
  };
  const handleChangeAboutModalOpen = () => {
    setChangeAboutModal(true);
  };
  const handleChangeAboutModalClose = () => {
    setChangeAboutModal(false);
  };
  const handleChangeAboutModalSubmit = () => {
    setChangeAboutModal(false);
  };

  return (
    <DashboardLayout>
      <ProfileScreen
        activeTab={activeTab}
        fileList={fileList}
        FileListChange={FileListChange}
        handleTabChange={handleTabChange}
        handleChangeAddressModalOpen={handleChangeAddressModalOpen}
        handleChangeLinksModalOpen={handleChangeLinksModalOpen}
        handleChangeAboutModalOpen={handleChangeAboutModalOpen}
      />
      {/* modals */}
      <ChangeAddressModal
        open={changeAddressModal}
        onClose={handleChangeAddressModalClose}
        handleSubmit={handleChangeAddressModalSubmit}
      />
      <ChangeLinksModal
        open={changeLinksModal}
        onClose={handleChangeLinksModalClose}
        handleSubmit={handleChangeLinksModalSubmit}
      />
      <ChangeAboutModal
        open={changeAboutModal}
        onClose={handleChangeAboutModalClose}
        handleSubmit={handleChangeAboutModalSubmit}
      />
    </DashboardLayout>
  );
};

export default ProfileContainer;
