import { CommonLiveStreamPlayer } from "@components";
import { ChatSection, VideoPostHeader } from "@liveMeetingsComponents";
import { chatData, ICON, liveVideosData, VIDEO } from "@constants";
import { Box } from "@mui/material";

const LiveStreamingScreen = ({
  streamBegin,
  setStreamBegin,
  startToBegin,
  setStartToBegin,
  showChat,
  setShowChat,
}: any) => {
  const meeting = liveVideosData.find((v) => v.id === Number(1));

  if (!meeting) return <div>Meeting not found</div>;

  const groupButtons = [
    {
      label: "Share",
      classname: "!w-[52px] md:!w-[110px]",
      icon: ICON.CONTENTHUB.SHARE,
      onClick: () => console.log("Share clicked"),
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
        startUserLiveStream={true}
        setShowChat={setShowChat}
        showChat={showChat}
        stage={true}
      />

      {/* Video Post Header */}
      <VideoPostHeader
        categories={["Keto / Carnivore", "Paleo"]}
        title={"How to Test glucose and Ketones With the Keto Mojo Device"}
        creator={{
          name: meeting.creator.name,
          avatar: meeting.creator.avatar,
          subscribers: 1000,
        }}
        groupButtons={groupButtons}
        postedAt={"4 months ago"}
        user={true}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id."
        }
      />

      <Box className="block lg:hidden">
        <ChatSection />
      </Box>
    </Box>
  );
};

export default LiveStreamingScreen;
