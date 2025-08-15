import { SplashScreen, Stack } from "expo-router";
import "./styles/global.css";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { poppinsFonts } from "@/constants/fonts";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    poppinsFonts,
  });


  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
