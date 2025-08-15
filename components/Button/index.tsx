import { ButtonsProps } from '@/interfaces/components/Button';
import React from 'react';
import { Pressable, Text } from 'react-native';

export type ColorVariant = keyof typeof variants.colors;

const variants = {
    size: {
        default: 'h-12 w-full text-center flex items-center justify-center rounded-2xl',
    },
    colors: {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        tertiary: 'bg-tertiary text-black',
    },
    font: {
        default: "font-poppins-semibold",
    }
};

export default function Button({...props}: ButtonsProps) {
  return (
    <Pressable onPress={() => props.action} className={`${variants.size.default} ${variants.colors[props.colorVariant]}`}>
        <Text className={`${variants.colors[props.colorVariant]} ${variants.font.default}`}>{props.text}</Text>
    </Pressable>
  )
}