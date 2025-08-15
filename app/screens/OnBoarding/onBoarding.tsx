import React, { useRef } from "react";
import OnBoardingPage from "@/template/OnBoardingPage";
import { onBoardingData } from "./data";
import AppIntroSlider from "react-native-app-intro-slider";

export default function FirstOnBoarding() {
  const sliderRef = useRef<AppIntroSlider>(null)

  const goToNext = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex + 1);
  }

  const goToPrevious = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex - 1);
  }

  return (
    <AppIntroSlider
      data={onBoardingData}
      renderItem={({ item }) => <OnBoardingPage {...item} buttonAction={() => goToNext}/>}
      skipLabel="Pular"
      nextLabel="Próximo"
      showDoneButton={false}
      activeDotStyle={{
        backgroundColor: "#0162E3",
        width: 20,
        
      }}
      dotStyle={{
        backgroundColor: "#C4C4C4",
        width: 10,
        height: 10,
        borderRadius: 5,
      }}
    />
  );
}
