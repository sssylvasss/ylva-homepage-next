import React, { useState, useEffect } from "react";
import VideoReactPlayer from "../components/art/VideoReactPlayer";
import {
  InnerVideoWrapper,
  MainVideoDiv,
  VideoTextDiv,
} from "../components/art/StylingArt";
import { useContentful } from "../useContentful";
import { TextP, TitleH2 } from "../styles/globalStyledComponents";
import type { Video as VideoType } from "../types/contentful";
import type { NextPage } from "next";

const VideoPage: NextPage = () => {
  const { getVideo } = useContentful();
  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    getVideo().then((response) => setVideos(response));
  }, [getVideo]);

  return (
    <MainVideoDiv>
      {videos.map((video) => (
        <InnerVideoWrapper key={video.id}>
          <VideoReactPlayer
            embedId={video.id}
            imageUrl={video.videoImage?.file.url}
          />
          <VideoTextDiv>
            <TitleH2>{video.title}</TitleH2>
            <TextP>{video.description}</TextP>
            {video.videoText && <TextP>{video.videoText}</TextP>}
          </VideoTextDiv>
        </InnerVideoWrapper>
      ))}
    </MainVideoDiv>
  );
};

export default VideoPage;
