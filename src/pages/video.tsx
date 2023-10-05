import React, { useState, useEffect } from "react";
import VideoReactPlayer from "../components/art/VideoReactPlayer";
import {
  InnerVideoWrapper,
  MainVideoDiv,
  VideoTextDiv,
} from "../components/art/StylingArt";
import { useContentful } from "../useContentful";
import { TextP, TitleH2 } from "../styles/globalStyledComponents";
export interface IVideo {
  videoText: string | null,
  description: string | null,
  id: string,
  title: string,
  videoImage: {
    description: string,
    file: any,
    titlel: string,
  }

}
export const Video = () => {
  const { getVideo } = useContentful();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo().then((response: any) => setVideos(response));
  }, []);

  return (
    <MainVideoDiv>
      {videos?.map((video: IVideo, i) => (
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
