import { useDeepLinking } from "./hooks/useDeepLinking";
// import { useState } from "react";
import NoVideo from "./ui/NoVideo";
import VideoPlayer from "./ui/VideoPlayer";

export default function Index() {
  const videoData = useDeepLinking();

  // const [videoData, ] = useState<{
  //   url: string;
  //   title?: string;
  // } | null>({
  //   url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  //   title: "Big Buck Bunny",
  // });

  if (!videoData) return <NoVideo />;

  return (
    <VideoPlayer
      videoUrl={videoData.url}
      title={videoData.title}
    />
  );
}
