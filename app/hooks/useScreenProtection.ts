import * as ScreenCapture from "expo-screen-capture";
import { useEffect } from "react";

export const useScreenProtection = () => {
  useEffect(() => {
    const enableProtection = async () => {
      try {
        await ScreenCapture.preventScreenCaptureAsync();
        console.log("Screen capture protection enabled");
      } catch (e) {
        console.warn("Could not enable screen capture protection:", e);
      }
    };

    enableProtection();

    return () => {
      ScreenCapture.allowScreenCaptureAsync();
    };
  }, []);
};
