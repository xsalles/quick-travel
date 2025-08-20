import React, { useRef } from "react";
import OnBoardingPage from "@/template/OnBoardingPage";
import { onBoardingData } from "./data";
import AppIntroSlider from "react-native-app-intro-slider";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function OnBoarding() {
  const sliderRef = useRef<AppIntroSlider>(null);

  const goToNext = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex + 1);
  };

  const goToPrevious = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex - 1);
  };

  const goToSignIn = () => {
    router.replace("/screens/Auth/SignIn/signIn");
  }

  return (
    <AppIntroSlider
      ref={sliderRef}
      data={onBoardingData}
      renderItem={({ item, index }) => (
        <OnBoardingPage {...item} buttonAction={index < onBoardingData.length - 1  ? goToNext : goToSignIn} />
      )}
      showDoneButton={false}
      showNextButton={false}
      activeDotStyle={{
        backgroundColor: "#0162E3",
        width: 20,
        height: 20,
        borderRadius: 999,
        marginBottom: 530,
      }}
      prevLabel="Voltar"
      showPrevButton={true}
      nextLabel="Próximo"
      renderPrevButton={() =>
        sliderRef.current?.state.activeIndex === 1 || 2 ? (
          <Button
            fontVariant="regular"
            sizeVariant="fit"
            action={goToPrevious}
            colorVariant="transparent"
            text="Voltar"
          />
        ) : null
      }
      dotStyle={{
        backgroundColor: "#C4C4C4",
        width: 20,
        height: 20,
        borderRadius: 999,
        marginBottom: 530,
      }}
    />
  );
}
