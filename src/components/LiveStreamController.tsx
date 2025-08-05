import { Fragment, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ICON } from "@constants";
import { AudioPopup, CameraPopup } from "@components";
import { LeaveStreamPopup } from "@liveMeetingsComponents";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import type { IMeetingControl } from "@types";

const LiveStreamController: React.FC<IMeetingControl> = ({
  streamBegin,
  setStartToBegin,
  startToBegin,
  setIsMuted,
  isMuted,
  isCameraOn,
  setIsCameraOn,
  anchorEl,
  setAnchorEl,
  onLeave,
  leaveStream,
  setLeaveStream,
  participantCount,
  handleLeaveStream,
  handleClick,
  handleClickCameraDot,
  cameraEl,
  setCameraEl,
  handleChatMenu,
}) => {
  const [recordStart, setRecordStart] = useState(false);
  return (
    <Box className=" flex w-full  items-center justify-between mt-2">
      {/* Control Bar */}
      {startToBegin ? (
        <Box className="lg:w-2/5 flex items-center gap-6 bg-black bg-opacity-60 rounded-full md:px-6 py-3">
          {/* Mute */}
          <Box className="flex flex-col items-center ">
            <Box className="w-[90px] bg-ordinary-main flex items-center gap-[9px] border-[1px] border-solid border-ordinary-dimmest text-white-main bg-opacity-50 h-[33px] md:h-[48px] px-2 rounded-[8px]">
              <Box
                onClick={() => setIsMuted(!isMuted)}
                component={"img"}
                src={`${
                  isMuted ? ICON.DASHBOARD.UNMUTEDICON : ICON.DASHBOARD.MUTEICON
                }`}
                alt="Mic"
                className=" w-[17px] h-[26px] lg:w-[26px] lg:h-[26px] py-1 cursor-pointer"
              />

              <Divider
                orientation="vertical"
                className="border-ordinary-dimmest border"
              />
              <Box
                onClick={(e: any) => handleClick && handleClick(e)}
                className=" flex justify-center items-center cursor-pointer"
              >
                <Box
                  component={"img"}
                  src={ICON.CONTENTHUB.DOTICON}
                  className="w-[24px] h-[24px]"
                />
              </Box>
            </Box>
          </Box>
          <AudioPopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} />

          {/* Camera */}
          <Box className="flex flex-col items-center ">
            <Box className="w-[90px] flex items-center gap-[9px] border-[1px] border-solid border-ordinary-dimmest text-white-main bg-opacity-50 h-[33px] md:h-[48px] px-2 rounded-[8px]">
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

              <Divider
                orientation="vertical"
                className="border-ordinary-dimmest border"
              />
              <Box
                onClick={(e: any) =>
                  handleClickCameraDot && handleClickCameraDot(e)
                }
                className=" flex justify-center items-center cursor-pointer"
              >
                <Box
                  component={"img"}
                  src={ICON.CONTENTHUB.DOTICON}
                  className="w-[24px] h-[24px]"
                />
              </Box>
            </Box>
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
              onClick={(e: any) => handleLeaveStream && handleLeaveStream(e)}
              className="flex !w-[48px]  h-[33px] md:h-[48px] gap-3 items-center bg-error-hard justify-center rounded-md cursor-pointer lg:w-[57px] lg h-[33px]:md:h-[48px]  border-[1px] border-solid border-secondary-main"
            >
              <Box
                component={"img"}
                src={ICON.CONTENTHUB.REDLEAVEICON}
                className="w-[32px] h-[32px]"
              />
            </Box>
          </Box>
          <LeaveStreamPopup
            anchorEl={leaveStream}
            setAnchorEl={setLeaveStream}
            handleClick={() => setStartToBegin(false)}
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
        <Box className="lg:w-2/5 flex items-center justify-end py-4 ">
          {streamBegin && (
            <Box className="hidden h-[48px] mr-2 lg:flex border-[1px] border-solid border-ordinary-dimmest items-center gap-2 text-white-main bg-opacity-50  px-3 py-2 rounded-[8px]">
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
          <Box
            onClick={() => setRecordStart(!recordStart)}
            className="bg-ordinary-main mr-2 w-[122px] gap-2 cursor-pointer h-[33px] md:h-[48px] rounded-lg  hidden md:flex justify-center items-center"
          >
            <RadioButtonCheckedIcon
              className={`${
                recordStart ? "text-error-main" : "text-ordinary-light"
              } w-[20px] h-[20px] `}
            />

            <Typography
              className={` ${
                recordStart ? "text-error-main" : "text-white-main"
              }  font-inter-semibold text-[16px]`}
            >
              {recordStart ? "Recording" : "Record"}
            </Typography>
          </Box>
          <Box className="relative  h-[33px] md:h-[48px] flex border-[1px] border-solid border-ordinary-dimmest items-center gap-1 text-white-main bg-opacity-50  px-3 py-2 rounded-[8px]">
            <Box
              component={"img"}
              src={ICON.CONTENTHUB.PARTICIPATE}
              className="w-[32px] h-[32px]"
            />

            <Typography variant="caption" className="text-white-main">
              {participantCount}
            </Typography>
          </Box>
          <Box
            onClick={(e: any) => handleChatMenu && handleChatMenu(e)}
            className="relative ml-2 hidden md:flex cursor-pointer h-[33px] md:h-[48px] border-[1px] border-solid border-ordinary-dimmest items-center gap-1 text-white-main bg-opacity-50 px-3 py-2 rounded-[8px]"
          >
            <Box
              component={"img"}
              src={ICON.CONTENTHUB.VIDEOMENU}
              className="w-[32px] h-[32px]"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LiveStreamController;
