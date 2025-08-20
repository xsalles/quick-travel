import { ButtonsProps } from '@/interfaces/components/Button';
import React from 'react';
import { Pressable, Text } from 'react-native';

export type ColorVariant = keyof typeof variants.colors;
export type SizeVariant = keyof typeof variants.size;
export type FontVariant = keyof typeof variants.font;

const variants = {
    size: {
        default: 'h-12 w-full text-center flex items-center justify-center rounded-2xl',
        fit: "h-fit w-fit ml-[62%]"
    },
    colors: {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        tertiary: 'bg-tertiary text-black',
        transparent: 'bg-transparent text-white underline',
    },
    font: {
        default: "font-poppins-semibold",
        regular: "font-poppins text-[16px]"
    }
};

export default function Button({...props}: ButtonsProps) {
  return (
    <Pressable onPress={props.action} className={`${variants.size[props.sizeVariant]} ${variants.colors[props.colorVariant]}`}>
        <Text className={`${variants.colors[props.colorVariant]} ${variants.font[props.fontVariant]}`}>{props.text}</Text>
    </Pressable>
  )
}