import LottieView from "lottie-react-native";
import { Text, View } from "react-native";

const NoVideo = () => {
  return (
    <View className="flex items-center justify-start">
      <View className="w-full flex items-center justify-center">
        <LottieView
          source={require("../../assets/lotties/no-video.json")}
          autoPlay
          style={{
            width: "80%",
            height: "80%",
          }}
        />
      </View>

      <Text className="font-bold text-xl text-purple-900">
        اختار الدرس من المنصة
      </Text>
    </View>
  );
};

export default NoVideo;
