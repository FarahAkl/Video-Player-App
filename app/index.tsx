import * as Linking from "expo-linking";
import { useEffect, useState } from "react";
import NoVideo from "./ui/NoVideo";
import VideoPlayer from "./ui/VideoPlayer";

export default function Index() {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    const getInitialUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        // ex: myapp://play?video=https://example.com/video.mp4
        const parsed = Linking.parse(initialUrl);
        if (parsed.queryParams?.video) {
          setVideoUrl(parsed.queryParams.video as string);
        }
      }
    };

    getInitialUrl();
  }, []);
  // const videoUrl =
  //   "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  if (!videoUrl) return <NoVideo />;

  return <VideoPlayer videoUrl={videoUrl} />;
}
