import { DashboardLayout } from "@layouts";
import { UploadContentScreen } from "@modules";
import type { UploadFile } from "antd";
import { useEffect, useRef, useState } from "react";
import { useForumContext } from "@context";
import { CategoryTagsModal } from "@components";
import { useSearchParams } from "react-router-dom";
import type { Dayjs } from "dayjs";

const UploadContentContainer = () => {
  const { postCategories, setPostCategories } = useForumContext();
  const [linkProduct, setLinkProduct] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const contentId = searchParams.get("id");
  const [scheduleMeeting, setScheduleMeeting] = useState(false);
  const [customDate, setCustomDate] = useState<Dayjs | null>(null);
  const [datePickerAnchor, setDatePickerAnchor] = useState<HTMLElement | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const [videoUrl, setVideoUrl] = useState<string | null>(
    contentId ? "https://www.youtube.com/shorts/Xulu1oYbiwE" : null
  );

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };
  const handleCustomDateSelect = (date: Dayjs | null) => {
    setCustomDate(date);
    setDatePickerAnchor(null);
  };

  useEffect(() => {
    if (contentId) {
      setPostCategories(["Keto / Carnivore", "Vegetarian / Vegan"]);
      setLinkProduct(true);
      setFileList([
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: "https://m.media-amazon.com/images/I/6187uc04PlL._SX522_.jpg",
        },
      ]);
    }
  }, [contentId]);
  return (
    <DashboardLayout>
      <UploadContentScreen
        contentId={contentId}
        linkProduct={linkProduct}
        scheduleMeeting={scheduleMeeting}
        setScheduleMeeting={setScheduleMeeting}
        customDate={customDate}
        setCustomDate={setCustomDate}
        datePickerAnchor={datePickerAnchor}
        setDatePickerAnchor={setDatePickerAnchor}
        handleChangeLinkProduct={handleChangeLinkProduct}
        fileList={fileList}
        handleFileListChange={handleFileListChange}
        handleOpenCategoryModal={handleOpenCategoryModal}
        handleCategoryClick={handleCategoryClick}
        fileInputRef={fileInputRef}
        videoUrl={videoUrl}
        handleButtonClick={handleButtonClick}
        handleFileChange={handleFileChange}
        handleCustomDateSelect={handleCustomDateSelect}
      />

      <CategoryTagsModal
        open={categoryModal}
        onClose={handleCloseCategoryModal}
        categories={postCategories}
        handleCategoryClick={handleCategoryClick}
      />
    </DashboardLayout>
  );
};

export default UploadContentContainer;
