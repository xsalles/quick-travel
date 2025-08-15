import { FC, ReactNode } from "react";
import { SvgProps } from "react-native-svg";

export interface OnBoardingProps {
  image: FC<SvgProps> | ReactNode;
  title: string;
  description: string;
  buttonText: "Próximo" | "Começar";
  lineDirection?: "left" | "center" | "right";
  buttonAction?: () => void;
}
