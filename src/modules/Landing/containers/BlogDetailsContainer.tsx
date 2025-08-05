import React from "react";
import { AppLayout } from "@layouts";
import { BlogDetailsScreen } from "@modules";

const BlogDetailsContainer: React.FC = () => {
  return (
    <AppLayout>
      <BlogDetailsScreen />
    </AppLayout>
  );
};

export default BlogDetailsContainer;
