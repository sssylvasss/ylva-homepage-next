import React, { useState, useEffect } from "react";
import Head from "next/head";
import VideoReactPlayer from "../components/art/VideoReactPlayer";
import {
  InnerVideoWrapper,
  MainVideoDiv,
  VideoTextDiv,
} from "../components/art/StylingArt";
import { useContentful } from "../useContentful";
import { GlobalText, SectionTitle } from "../styles/globalStyledComponents";
import type { NextPage } from "next";

const VideoPage: NextPage = () => {
  const { getVideo } = useContentful();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    getVideo().then((response) => setVideos(response));
  }, [getVideo]);

  return (
    <>
      <Head key="video-head">
        <title>Video | Ylva</title>
        <meta
          name="description"
          content="Video projects and creative works by Ylva Landoff Lindberg"
        />
      </Head>
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
    </>
  );
};

export default VideoPage;
