import { ColorVariant } from "@/components/Button";

export interface ButtonsProps {
    text: string;
    colorVariant: ColorVariant;
    action?: () => void;
}
