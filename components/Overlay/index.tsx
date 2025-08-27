import { View } from "react-native";
import React from "react";

interface OverlayProps {
  children?: React.ReactNode;
}

export default function Overlay({ children }: OverlayProps) {
  return (
    <View className="bg-black opacity-20 relative h-full w-full z-10 flex items-center justify-center">
      {children}
    </View>
  );
}
