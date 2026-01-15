import * as ScreenCapture from "expo-screen-capture";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect } from "react";
import { Dimensions, View } from "react-native";

interface IProps {
  videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: IProps) => {
  const player = useVideoPlayer(videoUrl, (player) => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    ScreenCapture.preventScreenCaptureAsync();
    return () => {
      ScreenCapture.allowScreenCaptureAsync();
    };
  }, []);

  const { width, height } = Dimensions.get("window");

  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <VideoView
        style={{ width: width - 32, height: height * 0.4, borderRadius: 12 }}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
};

export default VideoPlayer;
