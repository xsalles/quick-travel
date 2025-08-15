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
import { useFonts } from "expo-font";
import {} from "@expo-google-fonts/poppins";

export default function OnBoardingPage({ ...props }: OnBoardingProps) {
  return (
    <SafeAreaView className="flex-1 flex flex-col items-center bg-primary justify-between ">
      <LogoText style={{ marginTop: 52 }} />

      <View className="relative flex-1 w-full justify-center items-center">
        <View style={{ position: 'absolute', top: '14%' ,left: 0, right: 0, zIndex: 1 }}>
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

      <View className="flex-col px-12 w-full gap-6 items-center bg-black rounded-t-2xl py-8">
        <Text className="text-white text-2xl font-poppins-semibold text-center">
          {props.title}
        </Text>
        <Text className="text-white text-center text-base font-poppins">
          {props.description}
        </Text>

        <Button text={props.buttonText} action={() => props.buttonAction} colorVariant="secondary" />

        <View
          className={`flex-row ${
            props.lineDirection === "center"
              ? "justify-between"
              : "justify-center"
          } items-center text-center w-full h-fit`}
        >
          {props.lineDirection === "left" ? (
            <Text className="underline text-white font-poppins">Pular</Text>
          ) : props.lineDirection === "center" ? (
            <>
              <Text className="underline text-white font-poppins">Pular</Text>
              <Text className="underline text-white font-poppins">Voltar</Text>
            </>
          ) : (
            <Text className="underline text-white font-poppins">Voltar</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
