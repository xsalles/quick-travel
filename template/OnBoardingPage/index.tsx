import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoText from "../../../assets/images/icons/logo+text.svg";
import { OnBoardingProps } from "@/interfaces/template/OnBoarding";
import LineLeft from "../../assets/images/elements/lineLeft.svg";
import LineCenter from "../../assets/images/elements/lineCenter.svg";
import LineRight from "../../assets/images/elements/lineRight.svg";

export default function OnBoardingPage({ ...props }: OnBoardingProps) {
  return (
    <SafeAreaView className="flex-1 flex flex-col items-center bg-primary">
      <LogoText style={{ marginTop: 52 }} />

      <View className="relative first:z-10 last:z-20">
        {props.lineDirection === "left" ? (
          <LineLeft className="absolute" />
        ) : props.lineDirection === "center" ? (
          <LineCenter className="absolute" />
        ) : (
          <LineRight className="absolute" />
        )}

        {props.image}
      </View>

      <View className="flex-1 flex-col px-12 w-full items-center gap-6 bg-black rounded-t-2xl pt-8">
        <Text>{props.title}</Text>
        <Text>{props.description}</Text>



        <Pressable className="">{props.buttonText}</Pressable>

        <View className="flex flex-row justify-between w-full">
          <Text className="underline">Voltar</Text>
          <Text className="underline">Pular</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
