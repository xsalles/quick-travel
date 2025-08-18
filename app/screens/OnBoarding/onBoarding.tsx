import React, { useRef } from "react";
import OnBoardingPage from "@/template/OnBoardingPage";
import { onBoardingData } from "./data";
import AppIntroSlider from "react-native-app-intro-slider";
import Button from "@/components/Button";

export default function FirstOnBoarding() {
  const sliderRef = useRef<AppIntroSlider>(null);

  const goToNext = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex + 1);
  };

  const goToPrevious = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex - 1);
  };

  return (
    <AppIntroSlider
      ref={sliderRef}
      data={onBoardingData}
      renderItem={({ item }) => (
        <OnBoardingPage {...item} buttonAction={goToNext} />
      )}
      showDoneButton={false}
      showNextButton={false}
      activeDotStyle={{
        backgroundColor: "#0162E3",
        width: 20,
        height: 20,
        borderRadius: 999,
        marginBottom: 82,
      }}
      prevLabel="Voltar"
      showPrevButton={true}
      nextLabel="Próximo"
      renderPrevButton={() => <Button fontVariant="regular" sizeVariant="fit" action={goToPrevious} colorVariant="transparent" text="Voltar"/>}
      dotStyle={{
        backgroundColor: "#C4C4C4",
        width: 20,
        height: 20,
        borderRadius: 999,
        marginBottom: 82,
      }}
    />
  );
}
