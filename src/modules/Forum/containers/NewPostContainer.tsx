import React, { useState } from "react";
import type { UploadFile } from "antd";
import { useForumContext } from "@context";
import { DashboardLayout } from "@layouts";
import { NewPostScreen } from "@modules";
import { CategoryTagsModal } from "@components";

const NewPostContainer: React.FC = () => {
  const { postCategories, setPostCategories } = useForumContext();
  const [linkProduct, setLinkProduct] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);

  const handleFileListChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };
  const handleChangeLinkProduct = () => {
    setLinkProduct(!linkProduct);
  };
  const handleOpenCategoryModal = () => {
    setCategoryModal(true);
  };
  const handleCloseCategoryModal = () => {
    setCategoryModal(false);
  };
  const handleCategoryClick = (category: string) => {
    if (postCategories.includes(category)) {
      setPostCategories(postCategories.filter((cat) => cat !== category));
    } else {
      setPostCategories([...postCategories, category]);
    }
  };
  return (
    <DashboardLayout>
      <NewPostScreen
        linkProduct={linkProduct}
        handleChangeLinkProduct={handleChangeLinkProduct}
        fileList={fileList}
        handleFileListChange={handleFileListChange}
        handleOpenCategoryModal={handleOpenCategoryModal}
        handleCategoryClick={handleCategoryClick}
      />
      {/* modals */}
      <CategoryTagsModal
        open={categoryModal}
        onClose={handleCloseCategoryModal}
        categories={postCategories}
        handleCategoryClick={handleCategoryClick}
      />
    </DashboardLayout>
  );
};

export default NewPostContainer;
