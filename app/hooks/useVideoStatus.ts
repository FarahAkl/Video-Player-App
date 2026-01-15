import { useVideoPlayer } from "expo-video";
import { useEffect, useState } from "react";

interface VideoStatus {
  isLoading: boolean;
  error: string | null;
}

export const useVideoStatus = (videoUrl: string) => {
  const [status, setStatus] = useState<VideoStatus>({
    isLoading: true,
    error: null,
  });

  const player = useVideoPlayer(videoUrl, (player) => {
    player.loop = false;
    player.play();
  });

  useEffect(() => {
    // Monitor video status for errors
    const statusSubscription = player.addListener("statusChange", (videoStatus) => {
      if (videoStatus.error) {
        setStatus({
          isLoading: false,
          error: "Failed to load video. Please try again.",
        });
      }
    });

    // Monitor when video starts playing
    const playingSubscription = player.addListener("playingChange", (isPlaying) => {
      if (isPlaying) {
        setStatus((prev) => ({ ...prev, isLoading: false }));
      }
    });

    return () => {
      statusSubscription.remove();
      playingSubscription.remove();
    };
  }, [player]);

  return { player, ...status };
};