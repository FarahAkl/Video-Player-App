import * as ScreenCapture from "expo-screen-capture";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoScreen() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    ScreenCapture.preventScreenCaptureAsync();
    return () => {
      ScreenCapture.allowScreenCaptureAsync();
    };
  }, []);

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
