import React from "react";
import OnBoardingPage from "@/template/OnBoardingPage";
import { onBoardingData } from "./data";

export default function FirstOnBoarding() {
  return (
      <OnBoardingPage {...onBoardingData[1]}/>
  );
}
