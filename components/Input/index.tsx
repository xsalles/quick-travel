import { InputProps } from "@/interfaces/components/Input";
import React from "react";
import { Text, TextInput, View } from "react-native";

export default function Input({ ...props }: InputProps) {
  return (
    <View className="flex flex-col items-start w-full gap-2 h-fit">
      <Text className="text-xl font-poppins-semibold text-black">
        {props.label}
      </Text>
      <TextInput
        {...props}
        className="w-full border-b border-b-[#737373] placeholder:text-[#606060] placeholder:text-base h-fit"
      />
    </View>
  );
}
