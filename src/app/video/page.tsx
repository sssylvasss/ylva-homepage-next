import { fetchVideo } from "../../lib/contentfulServer";
import VideoClient from "./VideoClient";

export const metadata = {
  title: "Video | Ylva",
  description: "Video projects and creative works by Ylva Landoff Lindberg",
};

export const revalidate = 3600;

export default async function VideoPage() {
  const videos = await fetchVideo();
  return <VideoClient videos={videos} />;
}
