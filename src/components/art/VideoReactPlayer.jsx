import React from "react";
import { VideoDiv, PlayerReact, VideoImg } from "./StylingArt";


const tabNumber = 1;

const VideoReactPlayer = ({embedId, imageUrl }) => (


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
