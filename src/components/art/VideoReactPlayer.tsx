import React from "react";
import { VideoContainer, StyledReactPlayer } from "./StylingArt";

interface VideoReactPlayerProps {
  embedId: string;
  imageUrl?: string;
}

const VideoReactPlayer: React.FC<VideoReactPlayerProps> = ({
  embedId,
  imageUrl,
}) => {
  const videoUrl = `https://www.youtube.com/watch?v=${embedId}`;

  return (
    <VideoContainer>
      <StyledReactPlayer
        className="react-player"
        url={videoUrl}
        width="100%"
        height="100%"
        controls={true}
        light={imageUrl}
      />
    </VideoContainer>
  );
};

export default VideoReactPlayer;
