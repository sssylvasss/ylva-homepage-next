import React from "react";

import { VideoDiv, PlayerReact, VideoImg } from "./StylingArt";

interface VideoReactPlayerProps{
  embedId: string,
  image: any,
}

const tabNumber = 1;

const VideoReactPlayer: React.FC<VideoReactPlayerProps> = ({embedId,image }) => (


  <VideoDiv>
    <VideoImg alt='Video' src={image} />
    <PlayerReact
      previewTabIndex= {tabNumber}
      url={`https://www.youtube.com/watch?v=${embedId}`}
      width='100%'
      height='100%'
      light='true'
    ></PlayerReact>
  </VideoDiv>
);



export default VideoReactPlayer;
