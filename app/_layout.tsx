import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useFonts } from "expo-font";
import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "WorkSans-Black": require("@/assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("@/assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("@/assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return <Slot />;
};

export default RootLayout;
