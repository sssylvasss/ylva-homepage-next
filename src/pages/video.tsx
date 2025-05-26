import React, { useState, useEffect } from "react";
import VideoReactPlayer from "../components/art/VideoReactPlayer";
import {
  InnerVideoWrapper,
  MainVideoDiv,
  VideoTextDiv,
} from "../components/art/StylingArt";
import { useContentful } from "../useContentful";
import { GlobalText, SectionTitle } from "../styles/globalStyledComponents";
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
            <SectionTitle>{video.title}</SectionTitle>
            <GlobalText>{video.description}</GlobalText>
            {video.videoText && <GlobalText>{video.videoText}</GlobalText>}
          </VideoTextDiv>
        </InnerVideoWrapper>
      ))}
    </MainVideoDiv>
  );
};

export default VideoPage;
