import { DashboardLayout } from "@layouts";
import { StartLiveMeetingScreen } from "@modules";
import { useState } from "react";
import type { UploadFile } from "antd";
import { useForumContext } from "@context";
import { CategoryTagsModal } from "@components";
import type { Dayjs } from "dayjs";

const StartLiveMeetingContainer = () => {
  const { postCategories, setPostCategories } = useForumContext();
  const [linkProduct, setLinkProduct] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);

  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [camera, setCamera] = useState(true);
  const [scheduleMeeting, setScheduleMeeting] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [cameraEl, setCameraEl] = useState<HTMLButtonElement | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [customDate, setCustomDate] = useState<Dayjs | null>(null);
  const [datePickerAnchor, setDatePickerAnchor] = useState<HTMLElement | null>(
    null
  );

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
  const handleCustomDateSelect = (date: Dayjs | null) => {
    setCustomDate(date);
    setDatePickerAnchor(null);
  };
  const handleAudioPopupClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClickCameraDot = (e: any) => {
    setCameraEl(e.currentTarget);
  };
  return (
    <DashboardLayout>
      <StartLiveMeetingScreen
        linkProduct={linkProduct}
        handleChangeLinkProduct={handleChangeLinkProduct}
        fileList={fileList}
        handleFileListChange={handleFileListChange}
        handleOpenCategoryModal={handleOpenCategoryModal}
        handleCategoryClick={handleCategoryClick}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        camera={camera}
        setCamera={setCamera}
        scheduleMeeting={scheduleMeeting}
        setScheduleMeeting={setScheduleMeeting}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        cameraEl={cameraEl}
        setCameraEl={setCameraEl}
        customDate={customDate}
        setCustomDate={setCustomDate}
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
        datePickerAnchor={datePickerAnchor}
        setDatePickerAnchor={setDatePickerAnchor}
        handleCustomDateSelect={handleCustomDateSelect}
        handleAudioPopupClick={handleAudioPopupClick}
        handleClickCameraDot={handleClickCameraDot}
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

export default StartLiveMeetingContainer;
