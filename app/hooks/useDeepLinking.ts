import * as Linking from "expo-linking";
import { useEffect, useState } from "react";

interface VideoData {
  url: string;
  title?: string;
}

export const useDeepLinking = () => {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    const parseUrl = (url: string) => {
      const parsed = Linking.parse(url);
      if (parsed.queryParams?.video) {
        setVideoData({
          url: parsed.queryParams.video as string,
          title: parsed.queryParams.title as string | undefined,
        });
      }
    };

    // Get initial URL when app opens
    const getInitialUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        parseUrl(initialUrl);
      }
    };

    getInitialUrl();

    // Listen for new deep links while app is running
    const subscription = Linking.addEventListener("url", ({ url }) => {
      parseUrl(url);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return videoData;
};
