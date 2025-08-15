import { OnBoardingProps } from "@/interfaces/template/OnBoarding";


export const renderImage = ({...props}: OnBoardingProps) => {
  if (typeof props.image === "function") {
    const ImageComponent = props.image;
    return <ImageComponent />;
  }
  return props.image;
};
