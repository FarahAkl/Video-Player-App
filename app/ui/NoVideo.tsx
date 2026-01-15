import LottieView from "lottie-react-native";
import { Text, View } from "react-native";

const NoVideo = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <LottieView
        source={require("../../assets/lotties/no-video.json")}
        autoPlay
        loop
        style={{
          width: 300,
          height: 300,
        }}
      />

      <Text className="mt-10 font-bold text-2xl text-purple-900 text-center">
        اختار الدرس من المنصة
      </Text>
    </View>
  );
};

export default NoVideo;
