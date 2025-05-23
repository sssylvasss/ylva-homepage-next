import React from "react";
import { VideoDiv, PlayerReact, VideoImg } from "./StylingArt";

interface VideoReactPlayerProps {
  embedId: string;
  imageUrl?: string;
}

const tabNumber = 1;

const VideoReactPlayer: React.FC<VideoReactPlayerProps> = ({
  embedId,
  imageUrl,
}) => (
  <VideoDiv>
    {imageUrl && <VideoImg alt="Video" src={imageUrl} />}
    <PlayerReact
      previewTabIndex={tabNumber}
      url={`https://www.youtube.com/watch?v=${embedId}`}
      width="100%"
      height="100%"
      light={true}
    />
  </VideoDiv>
);

export default VideoReactPlayer;
