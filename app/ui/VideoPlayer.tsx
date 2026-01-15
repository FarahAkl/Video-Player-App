import { VideoView } from "expo-video";
import {
  ActivityIndicator,
  Text,
  // useWindowDimensions,
  View,
} from "react-native";
import { useScreenProtection } from "../hooks/useScreenProtection";
import { useVideoStatus } from "../hooks/useVideoStatus";

interface IProps {
  videoUrl: string;
  title?: string;
}

const VideoPlayer = ({ videoUrl, title }: IProps) => {
  // const { width, height } = useWindowDimensions();
  const { player, isLoading, error } = useVideoStatus(videoUrl);

  useScreenProtection();

  if (error) {
    return (
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-red-500 text-lg text-center mb-4">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center px-4">
      {/* Loading Indicator */}
      {isLoading && (
        <View className="absolute inset-0 items-center justify-center z-20">
          <ActivityIndicator
            size="large"
            color="#581c87"
          />
          <Text className="text-purple-900 mt-3 text-sm">Loading video...</Text>
        </View>
      )}

      {/* Video Player */}
      {!isLoading && (
        <VideoView
          style={{
            width: "100%",
            height: 200,
            borderRadius: 12,
          }}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          nativeControls
        />
      )}
    </View>
  );
};

export default VideoPlayer;
