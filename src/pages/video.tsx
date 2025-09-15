import React from "react";
import Head from "next/head";
import VideoReactPlayer from "../components/art/VideoReactPlayer";
import {
  InnerVideoWrapper,
  MainVideoDiv,
  VideoTextDiv,
} from "../components/art/StylingArt";
import { GlobalText, SectionTitle } from "../styles/globalStyledComponents";
import type { NextPage, GetStaticProps } from "next";
import { fetchVideo } from "../lib/contentfulServer";

interface VideoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  videos: any[];
}

const VideoPage: NextPage<VideoProps> = ({ videos }) => {
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

export const getStaticProps: GetStaticProps<VideoProps> = async () => {
  const videos = await fetchVideo();
  return {
    props: { videos },
    revalidate: 60 * 60, // 1 hour
  };
};
