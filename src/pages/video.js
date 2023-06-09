import React, { useState, useEffect } from "react";
import VideoReactPlayer from "../components/art/VideoReactPlayer";
import {
  MainVideoDiv,
  VideoTitleH2,
  VideoTextP,
  VideoTextDiv,
} from "../components/art/StylingArt";
import { useContentful } from "../useContentful";

export const Video = () => {
  const { getVideo } = useContentful();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo().then((response) => {
      setVideos(response);
    });
  }, []);

  return (
    <MainVideoDiv>
      {videos.map((video, i) => (
        <div style={{ margin: "30px 0 60px 0" }} key={i}>
          <VideoReactPlayer
            embedId={video?.id}
            image={video.videoImage?.file.url}
          />
          <VideoTextDiv>
            <VideoTitleH2>{video?.title}</VideoTitleH2>
            <VideoTextP>{video.description}</VideoTextP>
            {video?.videoText ? (
              <VideoTextP>{video?.videoText}</VideoTextP>
            ) : null}
          </VideoTextDiv>
        </div>
      ))}
    </MainVideoDiv>
  );
};

export default Video;
