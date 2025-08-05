import React, { useRef, useState } from "react";
import { Box, IconButton, Slider, Typography } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

import { ChatSection } from "@liveMeetingsComponents";

const RecordedContentVideo: React.FC<any> = ({
  videoSrc,
  participantCount = 1,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedQuality, setSelectedQuality] = useState("720p");
  const qualityOptions = [
    { label: "1080p", value: "1080p", src: "your_1080p_video_url.mp4" },
    { label: "720p", value: "720p", src: "your_720p_video_url.mp4" },
    { label: "480p", value: "480p", src: "your_480p_video_url.mp4" },
  ];

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };
  const handleVolume = () => {
    setVolume(volume === 0 ? 1 : 0);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (_: any, value: number | number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value as number;
      setCurrentTime(value as number);
    }
  };

  const handleVolumeChange = (_: any, value: number | number[]) => {
    if (videoRef.current) {
      videoRef.current.volume = value as number;
      setVolume(value as number);
    }
  };

  //   const currentSource =
  //     qualityOptions.find((q) => q.value === selectedQuality)?.src || videoSrc;

  // Fullscreen handler
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSettingsClose = () => {
    setAnchorEl(null);
  };
  const handleQualityChange = (quality: string) => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setSelectedQuality(quality);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = currentTime;
          videoRef.current.play();
        }
      }, 100); // Wait for src to update
    }
    setAnchorEl(null);
  };

  return (
    <Box
      className={`
      } bg-black-main relative p-2 pb-4 `}
    >
      <Box className="flex w-full h-[284px] gap-2  md:h-[790px]">
        {/* Video / Placeholder */}
        <Box className="flex-1 flex gap-2 items-center  justify-center relative">
          {true && (
            <Box
              className={`grid w-full  h-full gap-2 ${
                participantCount === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 md:grid-cols-2 place-content-center"
              }`}
            >
              {participantCount === 1 && (
                // Single user - full width video
                <Box
                  component={"video"}
                  ref={videoRef}
                  src={videoSrc ?? ""}
                  className="rounded-lg w-full max-h-[280px] min-h-[280px] md:min-h-[778px] object-cover"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  controls={false}
                />
              )}
            </Box>
          )}
          {/* Custom Controls */}
        </Box>

        {/* Chat Sidebar */}
        <Box className="hidden lg:block md:h-[778px] ">
          <ChatSection />
        </Box>
      </Box>
      <Box className="flex items-center md:gap-4 gap-2 bg-secondary-main lg:w-[1118px] w-full h-[41px] rounded-br-[12px] rounded-bl-[12px] mx-auto mt-2 md:px-4 px-2 ">
        <IconButton onClick={handlePlayPause}>
          {playing ? (
            <PauseIcon className="text-white-main" />
          ) : (
            <PlayArrowIcon className="text-white-main" />
          )}
        </IconButton>
        <Typography
          variant="body2"
          className="text-customGrey-light text-[10px]"
        >
          {formatTime(duration)}
        </Typography>
        <Slider
          size="small"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full custon-slider"
        />
        <Box
          component={"span"}
          className="text-nowrap text-customGrey-light text-[10px]"
        >
          {formatTime(currentTime)} / {formatTime(duration)}
        </Box>
        {volume > 0 ? (
          <VolumeUpIcon
            onClick={handleVolume}
            className="text-customGrey-thin"
          />
        ) : (
          <VolumeOffIcon
            onClick={handleVolume}
            className="text-customGrey-thin"
          />
        )}

        <Slider
          min={0}
          size="small"
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className="w-[100px]"
        />
        <IconButton onClick={handleSettingsClick}>
          <SettingsIcon className="text-customGrey-thin" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleSettingsClose}
        >
          {qualityOptions.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === selectedQuality}
              onClick={() => handleQualityChange(option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
        <IconButton onClick={handleFullscreen}>
          <FullscreenIcon className="text-white-main" />
        </IconButton>
      </Box>
    </Box>
  );
};

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default RecordedContentVideo;
