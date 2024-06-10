import { useEffect } from "react";
import Home from "./screens/Home";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Simulate a longer loading time
    const timer = setTimeout(async () => {
      // Hide the splash screen after the timer expires
      await SplashScreen.hideAsync();
    }, 3000); // Adjust the duration as needed (3000ms = 3 seconds)

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
