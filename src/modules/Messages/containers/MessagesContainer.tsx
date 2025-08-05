import React from "react";
import { DashboardLayout } from "@layouts";
import { MessagesScreen } from "@modules";
import { useSearchParams } from "react-router-dom";

const MessagesContainer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const chatId: string | null = searchParams.get("id");
  return (
    <DashboardLayout>
      <MessagesScreen chatId={chatId} />
    </DashboardLayout>
  );
};

export default MessagesContainer;
