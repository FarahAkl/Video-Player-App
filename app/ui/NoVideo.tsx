import LottieView from "lottie-react-native";
import { Text, View } from "react-native";

const NoVideo = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <View className="md:w-4/5 md:h-4/5">
        <LottieView
          source={require("../../assets/lotties/no-video.json")}
          autoPlay
          loop
          style={{
            width: 300,
            height: 300,
          }}
        />
      </View>

      <Text className="mt-10 font-bold text-2xl text-purple-900 text-center">
        أختار الدرس من المنصة
      </Text>
    </View>
  );
};

export default NoVideo;
