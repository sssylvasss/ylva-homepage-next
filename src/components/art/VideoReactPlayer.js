import React from "react";
import PropTypes from "prop-types";
import { any } from "prop-types";

import { VideoDiv, PlayerReact, VideoImg } from "./StylingArt";

const VideoReactPlayer = (props) => (
  <VideoDiv>
    <VideoImg alt='Video' src={props.image} />
    <PlayerReact
      previewTabIndex='1'
      url={`https://www.youtube.com/watch?v=${props.embedId}`}
      width='100%'
      height='100%'
      light='true'
    ></PlayerReact>
  </VideoDiv>
);

VideoReactPlayer.propTypes = {
  embedId: PropTypes.string.isRequired,
  image: any,
};

export default VideoReactPlayer;
