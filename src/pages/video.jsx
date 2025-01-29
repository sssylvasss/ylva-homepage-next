import React, { useState, useEffect } from "react";
import VideoReactPlayer from "../components/art/VideoReactPlayer";
import {
  InnerVideoWrapper,
  MainVideoDiv,
  VideoTextDiv,
} from "../components/art/StylingArt";
import { useContentful } from "../useContentful";
import { TextP, TitleH2 } from "../styles/globalStyledComponents";

export const Video = () => {
  const { getVideo } = useContentful();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo().then((response) => setVideos(response));
  }, []);

  return (
    <MainVideoDiv>
      {videos?.map((video, i) => (
        <InnerVideoWrapper key={i}>
          <VideoReactPlayer
            embedId={video?.id}
            imageUrl={video.videoImage?.file.url}
          />
          <VideoTextDiv>
            <TitleH2>{video?.title}</TitleH2>
            <TextP>{video.description}</TextP>
            {video?.videoText ? <TextP>{video?.videoText}</TextP> : null}
          </VideoTextDiv>
        </InnerVideoWrapper>
      ))}
    </MainVideoDiv>
  );
};

export default Video;
