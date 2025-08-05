import { Box } from "@mui/material";
import React from "react";
import type {IVideoPlayerProps} from "@types"


const CommonVideoPlayer: React.FC<IVideoPlayerProps> = ({
    src,
    autoPlay = false,
    controls = true,
    loop = false,
    muted = false,
    poster,
    className = "",
}) => {
    return (
        <Box
            component={"video"}
            src={src}
            autoPlay={autoPlay}
            controls={controls}
            loop={loop}
            muted={muted}
            poster={poster}
            className={` object-cover ${className}`}
        />
    );
};

export default CommonVideoPlayer;
