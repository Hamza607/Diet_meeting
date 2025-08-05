import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@layouts";
import { ForumScreen } from "@modules";

const ForumContainer: React.FC = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<string>("Relevance");
  const handleSelectSortBy = (sortBy: string) => {
    setSortBy(sortBy);
  };
  return (
    <DashboardLayout>
      <ForumScreen
        navigate={navigate}
        sortBy={sortBy}
        handleSelectSortBy={handleSelectSortBy}
      />
    </DashboardLayout>
  );
};

export default ForumContainer;
