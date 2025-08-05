import { CommonLiveStreamPlayer, CommonProductCard } from "@components";
import { ICON, liveVideosData, VIDEO } from "@constants";
import { useParams } from "react-router-dom";
import { chatData } from "@constants";
import { VideoPostHeader } from "@liveMeetingsComponents";
import { Box } from "@mui/material";
import { ChatSection } from "@liveMeetingsComponents";
import { useAppContext } from "@context";
import type { ILiveMeetingViewers } from "@types";

const LiveMeetingViewerScreen: React.FC<ILiveMeetingViewers> = ({
  streamBegin,
  setStreamBegin,
  startToBegin,
  setStartToBegin,
  showChat,
  setShowChat,
}) => {
  const { handleReportModalOpen, handleShareClick } = useAppContext();
  const { id } = useParams<{ id: string }>();

  const meeting = liveVideosData.find((v) => v.id === Number(id));

  if (!meeting) return <Box>Meeting not found</Box>;
  const groupButtons = [
    {
      label: "Share",
      icon: ICON.CONTENTHUB.SHARE,
      onClickHandle: () => handleShareClick(),
    },
    {
      label: "Report",
      icon: ICON.CONTENTHUB.REPORT,
      onClickHandle: () => handleReportModalOpen(),
    },
  ];

  return (
    <Box className="lg:px-3">
      <CommonLiveStreamPlayer
        isLive={meeting.live === "LIVE"}
        videoSrc={VIDEO.LANDING.HOME_SCREEN_VIDEO}
        streamerName={meeting.creator.name}
        chatMessages={chatData}
        height="h-[650px]"
        setStartToBegin={setStartToBegin}
        startToBegin={startToBegin}
        streamBegin={streamBegin}
        setStreamBegin={setStreamBegin}
        showChat={showChat}
        setShowChat={setShowChat}
        stage={false}
      />

      {/* Video Post Header */}
      <VideoPostHeader
        categories={["Keto / Carnivore", "Paleo"]}
        title={"Challenges of Keto"}
        creator={{
          name: meeting.creator.name,
          avatar: meeting.creator.avatar,
          subscribers: 1000,
        }}
        postedAt={"4 months ago"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
        }
        groupButtons={groupButtons}
      />

      {/* Product Card */}
      <CommonProductCard
        image={ICON.DASHBOARD.LIVEMEETINGPRODUCT}
        title="Mojo Device"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."
        buttonLabel="Shop Now"
        onButtonClick={() => {
          // Example action
          window.location.href = "https://your-shop-link.com";
        }}
      />
      <Box className="block lg:hidden">
        <ChatSection />
      </Box>
    </Box>
  );
};

export default LiveMeetingViewerScreen;
