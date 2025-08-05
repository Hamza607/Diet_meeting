import React, { useState } from "react";
import type { UploadFile } from "antd";
import { DashboardLayout } from "@layouts";
import { PersonalInfoScreen } from "@modules";
import { NavigationBar } from "@settingsComponents";

const PersonalInfoContainer: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [interested, setInterested] = useState<string[]>([]);

  const FileListChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };
  const handleInterested = (value: string) => {
    if (interested.includes(value)) {
      setInterested(interested.filter((item) => item !== value));
    } else {
      setInterested([...interested, value]);
    }
  };
  return (
    <DashboardLayout>
      <NavigationBar />
      <PersonalInfoScreen
        fileList={fileList}
        FileListChange={FileListChange}
        interested={interested}
        handleInterested={handleInterested}
      />
    </DashboardLayout>
  );
};

export default PersonalInfoContainer;
