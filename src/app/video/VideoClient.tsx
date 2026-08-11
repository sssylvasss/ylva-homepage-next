"use client";

import React from "react";
import type { Video } from "../../lib/contentfulServer";
import VideoReactPlayer from "../../components/art/VideoReactPlayer";
import {
  InnerVideoWrapper,
  MainVideoDiv,
  VideoTextDiv,
} from "../../components/art/StylingArt";
import { GlobalText, SectionTitle } from "../../styles/globalStyledComponents";

interface VideoClientProps {
  videos: Video[];
}

export default function VideoClient({ videos }: VideoClientProps) {
  return (
    <MainVideoDiv>
      {videos.map((video) => (
        <InnerVideoWrapper key={video.id}>
          <VideoReactPlayer
            embedId={video.id}
            imageUrl={video.videoImage?.file?.url}
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
}
