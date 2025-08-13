import { Image, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./styles/global.css";
import Logo from '../assets/images/icons/logo.svg';
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/screens/onBoarding/first")
    }, 3000)

    return () => clearTimeout(timer)
  })

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary">
      <StatusBar hidden />
      

      <Logo />

    </SafeAreaView>
  );
}
