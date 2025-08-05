import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@layouts";
import { PostDetailsScreen } from "@modules";

const PostDetailsContainer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <PostDetailsScreen navigate={navigate} />
    </DashboardLayout>
  );
};

export default PostDetailsContainer;
