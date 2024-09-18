import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigators/stacknavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("./fonts/Poppins/Poppins-Black.ttf"),
    "Merriweather-Black": require("./fonts/Merriweather/Merriweather-Black.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
