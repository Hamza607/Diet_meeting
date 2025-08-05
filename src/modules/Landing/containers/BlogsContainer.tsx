import React from "react";
import { AppLayout } from "@layouts";
import { BlogsScreen } from "@modules";

const BlogsContainer: React.FC = () => {
  return (
    <AppLayout>
      <BlogsScreen />
    </AppLayout>
  );
};

export default BlogsContainer;
