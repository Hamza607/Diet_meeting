// components/LiveStreamPlayer.tsx

import React, { Fragment, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ICON } from "@constants";
import {
  AppButton,
  CommonVideoPlayer,
  LiveStreamController,
  AudioPopup,
  CameraPopup,
  StreamChatPopup,
} from "@components";
import { LeaveStreamPopup, ChatSection } from "@liveMeetingsComponents";
import { DeleteTableDataModal } from "@contentHubComponents";
import type { ILiveStreamPlayerProps } from "@types";

const CommonLiveStreamPlayer: React.FC<ILiveStreamPlayerProps> = ({
  isLive,
  videoSrc,
  streamerName,
  participantCount = 1, // Default to single user
  secondVideoSrc,
  onLeave,
  streamBegin,
  setStreamBegin,
  startToBegin,
  setStartToBegin,
  startUserLiveStream,
  showChat,
  setShowChat,
  stage,
  // height,
}) => {
  console.log("🚀 ~ isLive:", isLive);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [chatDisable, setChatDisable] = useState<HTMLButtonElement | null>(
    null
  );
  const [bringStage, setBringStage] = useState(true);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [cameraEl, setCameraEl] = useState<HTMLButtonElement | null>(null);
  const [leaveStream, setLeaveStream] = useState<HTMLButtonElement | null>(
    null
  );
  const [unpublish, setUnPublish] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget as HTMLButtonElement);
  };
  const handleClickCameraDot = (e: any) => {
    setCameraEl(e.currentTarget);
  };
  const handleLeave = () => {
    setStartToBegin(false);
    setUnPublish(true);
  };
  const handleLeaveStream = (e: any) => {
    setLeaveStream(e.currentTarget);
  };
  const handleChatMenu = (e: any) => {
    setChatDisable(e.currentTarget);
  };
  return (
    <Box
      // className={`flex w-full ${
      //   height ?? "h-[650px]"
      // } bg-black-main relative p-2 pb-16`}
      className={`
      } bg-black-main relative p-2 pb-0 `}
    >
      <Box className="flex w-full h-[284px] gap-2  md:h-[790px]">
        {/* Video / Placeholder */}
        <Box className="flex-1 flex gap-2 items-center justify-center relative">
          {streamBegin ? (
            <Box
              className={`grid w-full  h-full gap-2 relative ${
                participantCount === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 md:grid-cols-2 place-content-center"
              }`}
            >
              {participantCount === 1 ? (
                // Single user - full width video
                <CommonVideoPlayer
                  src={videoSrc ?? ""}
                  autoPlay
                  controls
                  className="rounded-lg w-full h-full md:min-h-[778px]"
                />
              ) : (
                // Dual users - responsive grid layout
                <Fragment>
                  <CommonVideoPlayer
                    src={videoSrc ?? ""}
                    autoPlay
                    controls
                    className="rounded-lg w-full h-[406px] "
                  />
                  <CommonVideoPlayer
                    src={secondVideoSrc ?? videoSrc ?? ""}
                    autoPlay
                    controls
                    className="rounded-lg w-full h-[406px] "
                  />
                </Fragment>
              )}
              {bringStage && stage && (
                <Box className="w-[377px] h-[112px] rounded-2xl p-4 bg-white-main absolute left-2 bottom-2 z-50">
                  <Box className="flex justify-between  w-full">
                    <Box className="flex  gap-4 w-full">
                      <Box
                        component={"img"}
                        src={ICON.CONTENTHUB.RAISEHAND}
                        className="w-[24px] h-[24px]"
                      />
                      <Box className="w-full flex flex-col gap-4">
                        <Typography className="font-inter-semibold text-md">
                          Mathew raised hand
                        </Typography>
                        <AppButton className="!w-[168px] h-[40px]">
                          Bring on Stage
                        </AppButton>
                      </Box>
                      <Box
                        onClick={() => setBringStage(false)}
                        component={"img"}
                        src={ICON.DASHBOARD.MODALCLOSE}
                        className="w-[24px] h-[24px] cursor-pointer"
                      />
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          ) : (
            <Box className="text-center">
              <Box
                onClick={() => setStreamBegin(true)}
                component={"img"}
                src={ICON.DASHBOARD.LIVEMEETINGVIDEO}
                alt="Placeholder"
                className=""
              />
              <Typography
                variant="h5"
                className="text-white-main font-inter-semibold text-[34px]"
              >
                Stream will begin shortly
              </Typography>
              <Typography
                variant="body2"
                className="text-secondary-thin font-inter-regular text-[16px] mt-2"
              >
                Sit back and relax
              </Typography>
            </Box>
          )}

          {/* Streamer Label */}
          {streamBegin && (
            <Box className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded">
              <Typography variant="caption" className="text-white">
                {participantCount === 1
                  ? streamerName
                  : `${streamerName} & Guest`}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Chat Sidebar */}
        <Box className="hidden lg:block ">{showChat && <ChatSection />}</Box>
      </Box>
      {startUserLiveStream ? (
        <Fragment>
          <LiveStreamController
            streamBegin={streamBegin}
            startToBegin={startToBegin}
            setStartToBegin={setStartToBegin}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            isCameraOn={isCameraOn}
            setIsCameraOn={setIsCameraOn}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            leaveStream={leaveStream}
            setLeaveStream={setLeaveStream}
            onLeave={onLeave}
            participantCount={participantCount}
            handleLeaveStream={handleLeaveStream}
            handleClick={handleClick}
            handleClickCameraDot={handleClickCameraDot}
            cameraEl={cameraEl}
            setCameraEl={setCameraEl}
            handleChatMenu={handleChatMenu}
          />
          <StreamChatPopup
            anchorEl={chatDisable}
            setAnchorEl={setChatDisable}
            setShowChat={setShowChat}
            showChat={showChat}
          />
        </Fragment>
      ) : (
        <Box className=" flex w-full  items-center justify-between mt-2">
          {/* Control Bar */}
          {startToBegin ? (
            <Box className="lg:w-2/5 flex items-center gap-6 bg-black bg-opacity-60 rounded-full md:px-6 py-3">
              {/* Mute */}
              <Box className="flex flex-col items-center ">
                <Box className="lg:w-[141px] flex items-center gap-[9px] border-[1px] border-solid border-ordinary-dimmest text-white-main bg-opacity-50 h-[48px] px-2 rounded-[8px]">
                  <Box
                    onClick={() => setIsMuted(!isMuted)}
                    component={"img"}
                    src={`${
                      isMuted
                        ? ICON.DASHBOARD.MUTEICON
                        : ICON.DASHBOARD.UNMUTEDICON
                    }`}
                    alt="Mic"
                    className=" w-[17px] h-[26px] lg:w-[26px] lg:h-[26px]"
                  />
                  <Typography
                    onClick={() => setIsMuted(!isMuted)}
                    variant="caption"
                    className="text-white-main hidden md:block w-full font-inter-semibold text-nowrap cursor-pointer  mr-2"
                  >
                    {isMuted ? "Unmute" : "Mute"}
                  </Typography>
                  <Divider
                    orientation="vertical"
                    className="border-ordinary-dimmest border"
                  />
                  <Box
                    onClick={handleClick}
                    className="px-3 flex justify-center items-center cursor-pointer"
                  >
                    <Box
                      component={"img"}
                      src={ICON.CONTENTHUB.DOTICON}
                      className="w-[24px] h-[24px] relative right-2"
                    />
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  className="text-secondary-thinnest hidden md:block"
                >
                  Audio
                </Typography>
              </Box>
              <AudioPopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} />

              {/* Camera */}
              <Box className="flex flex-col items-center ">
                <Box className="lg:w-[197px] flex items-center gap-[9px] border-[1px] border-solid border-ordinary-dimmest text-white-main bg-opacity-50 h-[48px] px-2 rounded-[8px]">
                  <Box
                    onClick={() => setIsCameraOn(!isCameraOn)}
                    component={"img"}
                    src={
                      isCameraOn
                        ? ICON.DASHBOARD.CAMERAON
                        : ICON.DASHBOARD.OFFCAMERA
                    }
                    alt="Mic"
                    className="w-[25px] h-[17px]  lg:h-[25px] cursor-pointer "
                  />
                  <Typography
                    onClick={() => setIsCameraOn(!isCameraOn)}
                    variant="caption"
                    className="text-white-main hidden md:block w-full text-[16px] font-inter-semibold text-nowrap cursor-pointer mr-2"
                  >
                    {isCameraOn ? "Camera On" : "Camera Off"}
                  </Typography>
                  <Divider
                    orientation="vertical"
                    className="border-ordinary-dimmest border"
                  />
                  <Box
                    onClick={handleClickCameraDot}
                    className="px-3 flex justify-center items-center cursor-pointer"
                  >
                    <Box
                      component={"img"}
                      src={ICON.CONTENTHUB.DOTICON}
                      className="w-[24px] h-[24px] relative right-2"
                    />
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  className="text-secondary-thinnest  hidden md:block"
                >
                  Video
                </Typography>
              </Box>
              <CameraPopup anchorEl={cameraEl} setAnchorEl={setCameraEl} />
            </Box>
          ) : (
            <Box className="lg:w-2/5"></Box>
          )}
          {/* Bottom Bar */}
          {!startToBegin && <Box></Box>}
          {startToBegin ? (
            <Fragment>
              <Box
                onClick={() => {
                  // setStreamBegin(false);
                }}
                className="lg:w-1/5 flex items-center flex-col justify-center  text-white-main bg-opacity-50 px-4 py-2 rounded"
              >
                {/* Leave Button */}
                <Box
                  onClick={handleLeaveStream}
                  className="flex flex-col items-center bg-ordinary-dim justify-center rounded-md cursor-pointer lg:w-[57px] lg:h-[48px] p-2 border-[1px] border-solid border-secondary-main"
                >
                  <Box
                    component={"img"}
                    src={ICON.CONTENTHUB.LEAVEICON}
                    className="w-[57px] h-[48px]"
                  />
                </Box>
                <Typography
                  variant="caption"
                  className="text-secondary-thinnest cursor-pointer hidden md:block"
                >
                  Leave
                </Typography>
              </Box>
              <LeaveStreamPopup
                anchorEl={leaveStream}
                setAnchorEl={setLeaveStream}
                handleClick={handleLeave}
                onLeave={onLeave}
              />
            </Fragment>
          ) : (
            <Fragment>
              {streamBegin && (
                <Box
                  onClick={() => setStartToBegin(true)}
                  className="w-2/5 flex items-center justify-center gap-4  text-white-main bg-opacity-50 px-4 py-2 rounded"
                >
                  <Box
                    onClick={() => console.log("Leave meeting")}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <Box component={"img"} src={ICON.CONTENTHUB.REQSTJOIN} />
                  </Box>
                </Box>
              )}
            </Fragment>
          )}
          {true && (
            <Box className="lg:w-2/5 flex gap-2 items-center justify-end py-4 ">
              {streamBegin && (
                <Box className="hidden lg:flex border-[1px] border-solid border-ordinary-dimmest items-center gap-1 text-white-main bg-opacity-50 h-[35px] lg:h-[48px] px-3 py-2 rounded-[8px]">
                  <FiberManualRecordIcon
                    className="text-error-hard w-[10px] h-[10px]"
                    fontSize="small"
                  />
                  <Typography className="text-ordinary-light font-inter-semibold text-[16px]">
                    LIVE
                  </Typography>
                  <Typography className="text-ordinary-thinner font-inter-regular text-[16px]">
                    12:23 {/* Example timer */}
                  </Typography>
                </Box>
              )}
              <Box className="relative flex border-[1px] border-solid border-ordinary-dimmest items-center gap-1 text-white-main bg-opacity-50 h-[35px] lg:h-[48px] px-3 py-2 rounded-[8px]">
                <Box
                  component={"img"}
                  src={ICON.CONTENTHUB.PARTICIPATE}
                  className="w-[32px] h-[32px]"
                />

                <Typography variant="caption" className="text-white-main">
                  {participantCount}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      )}
      <DeleteTableDataModal
        open={unpublish}
        leave={true}
        text={
          " If you leave this page you will automatically leave the meeting"
        }
        buttontext="Stay on Page"
        onClose={() => setUnPublish(false)}
      />
    </Box>
  );
};

export default CommonLiveStreamPlayer;
