import { OnBoardingProps } from "@/interfaces/template/OnBoarding";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoText from "../../assets/images/icons/logo+text.svg";
import LineCenter from "../../assets/images/elements/lineCenter.svg";
import LineLeft from "../../assets/images/elements/lineLeft.svg";
import LineRight from "../../assets/images/elements/lineRight.svg";
import { renderImage } from "@/helpers/renderImage";
import Button from "@/components/Button";

export default function OnBoardingPage({ ...props }: OnBoardingProps) {
  return (
    <SafeAreaView className="flex-1 flex flex-col items-center bg-primary justify-between ">
      <LogoText style={{ marginTop: 52 }} />

      <View className="relative flex-1 w-full justify-center items-center">
        <View style={{
          position: 'absolute',
          bottom: props.lineDirection === "left" ? "22.2%" : undefined,
          left: 0,
          right: 0,
          zIndex: 1
        }}>
          {props.lineDirection === "left" ? (
            <LineLeft />
          ) : props.lineDirection === "center" ? (
            <LineCenter />
          ) : (
            <LineRight />
          )}
        </View>

        {/* Airplane in foreground */}
        <View style={{ zIndex: 10, position: 'relative' }}>
          {renderImage(props)}
        </View>
      </View>

      <View className="flex-col min-h-[300px] px-12 w-full gap-6 items-center bg-black rounded-t-2xl py-8">
        <Text className="text-white text-2xl font-poppins-semibold text-center">
          {props.title}
        </Text>
        <Text className="text-white text-center text-base font-poppins">
          {props.description}
        </Text>

        <Button fontVariant="default" sizeVariant="default" text={props.buttonText} action={props.buttonAction} colorVariant="secondary" />

        
      </View>
    </SafeAreaView>
  );
}
