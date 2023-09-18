import React from "react";

import { VideoDiv, PlayerReact, VideoImg } from "./StylingArt";
import { IVideo } from "../../pages/video";
import { UrlObject } from "url";

interface VideoReactPlayerProps{
  embedId: string,
  imageUrl: string,
}



const tabNumber = 1;

const VideoReactPlayer: React.FC<VideoReactPlayerProps> = ({embedId, imageUrl }) => (


  <VideoDiv>

    <VideoImg alt='Video' src={imageUrl} />
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
