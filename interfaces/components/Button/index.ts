import { ColorVariant, FontVariant, SizeVariant } from "@/components/Button";

export interface ButtonsProps {
    text: string;
    colorVariant: ColorVariant;
    sizeVariant: SizeVariant;
    fontVariant: FontVariant;
    action?: () => void;
}
