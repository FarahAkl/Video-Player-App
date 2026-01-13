import { Image, Text, View } from "react-native";

const NoVideo = () => {
  return (
    <View className="h-full w-full flex items-center justify-center">
      <Image
        source={require("../../assets/images/SMCET.jpg")}
        className="w-24 h-24 bg-black"
      />
      <Text className="font-bold text-xl text-purple-900">
        No Available Video
      </Text>
    </View>
  );
};

export default NoVideo;
