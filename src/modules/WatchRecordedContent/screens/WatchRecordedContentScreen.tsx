import { CommentBox, CommonProductCard } from "@components";
import {  COMMENTS_DATA, ICON, liveVideosData, VIDEO } from "@constants";
import { useParams } from "react-router-dom";
import { chatData } from "@constants";
import { VideoPostHeader } from "@liveMeetingsComponents";
import { Box, IconButton, Input } from "@mui/material";
import { RecordedContentVideo } from "@watchRecordedContentComponents";
import { useAppContext } from "@context";

const WatchRecordedContentScreen = () => {
  const { handleReportModalOpen, handleShareClick } = useAppContext();
  const { id } = useParams<{ id: string }>();

  const meeting = liveVideosData.find((v) => v.id === Number(id));

  if (!meeting) return <div>Meeting not found</div>;

  const groupButtons = [
    {
      label: "Favorite",
      icon: ICON.CONTENTHUB.FAVORITE,
      onClickHandle: () => console.log("Share clicked"),
    },
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
    <Box>
      <Box>
        <RecordedContentVideo
          isLive={meeting.live === "LIVE"}
          videoSrc={VIDEO.LANDING.HOME_SCREEN_VIDEO}
          streamerName={meeting.creator.name}
          chatMessages={chatData}
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
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id."
          }
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
      </Box>
      <Box className="max-w-[1120px] mx-auto">
        <Box className="md:pl-5 md:pr-10 sm:mt-[3rem] mt-[2rem]">
          <Box className="flex items-center gap-5">
            <Box
              component="img"
              src={"https://randomuser.me/api/portraits/men/32.jpg"}
              alt=""
              className="w-[36px] h-[36px] rounded-full"
            />
            <Input
              placeholder="Add a comment"
              className="w-full max-w-[560px] h-[44px] before:!hidden after:!hidden !bg-white-strong !border-[1px] !border-solid !border-secondary-light !rounded-[4px] px-[1rem]"
              inputProps={{
                className:
                  "!border-none text-sm font-inter-medium font-medium text-secondary-main",
              }}
            />
            <IconButton className="w-[42px] h-[42px] rounded-full !bg-secondary-light flex justify-center items-center p-0">
              <Box component="img" src={ICON.DASHBOARD.SEND_ICON} alt="" />
            </IconButton>
          </Box>
          <Box className="mt-[2rem]">
            <Box className="mb-3">
              {COMMENTS_DATA.map((item, index) => {
                const { id, avatar, username, time, comment, replies } = item;
                return (
                  <CommentBox
                    key={index}
                    id={id}
                    avatar={avatar}
                    username={username}
                    time={time}
                    comment={comment}
                    replies={replies}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WatchRecordedContentScreen;
