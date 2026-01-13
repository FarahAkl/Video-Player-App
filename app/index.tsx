import VideoPlayer from "./ui/VideoPlayer";
import NoVideo from "./ui/NoVideo";

export default function Index() {
  const videoUrl = '';

  if (!videoUrl) {
    return <NoVideo />;
  }

  return <VideoPlayer videoUrl={videoUrl} />;
}
