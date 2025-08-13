import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";

export default function FirstOnBoarding() {
  return (
    <SafeAreaView>
      <Button text="Próximo" colorVariant="primary" />
    </SafeAreaView>
  );
}
