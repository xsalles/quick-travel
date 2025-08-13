import { ReactNode } from "react";

export interface OnBoardingProps {
    image: ReactNode;
    title: string;
    description: string;
    buttonText: 'Próximo' | 'Começar';
    lineDirection?: 'left' | 'center' | 'right';
    buttonAction?: () => void;
}