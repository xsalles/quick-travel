import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IllustrationAirport from "../../../../assets/images/illustrations/IllustrationAirport.svg";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 flex-col items-center bg-white">
      <View className="flex items-center justify-center w-full h-fit p-4 rounded-br-[64px] bg-primary">
        <IllustrationAirport width={300} height={300} />
      </View>

      <View className="flex flex-col items-center justify-center w-full h-fit mt-7">
        <View className="w-[80%] h-full gap-6 flex flex-col">
          <Text className="text-4xl font-poppins-semibold">Entrar</Text>
          <View className="flex flex-col gap-10 mt-10">
            <Input label="Email" placeholder="Digite o email" />
            <Input
              label="Senha"
              placeholder="Digite a sua senha"
              secureTextEntry={true}
            />
          </View>
          <Text className="text-right font-poppins-semibold underline">
            Esqueceu a senha?
          </Text>
          <Button
            colorVariant="primary"
            fontVariant="default"
            sizeVariant="default"
            text="Entrar"
          />

          <View className="flex flex-row items-center justify-center gap-2 mt-4">
            <View className="border-b border-b-black w-[90px]" />
            <Text className="font-poppins-semibold">ou</Text>
            <View className="border-b border-b-black w-[90px] " />
          </View>

          <Text className="text-center font-poppins-semibold">
            Ainda não tem uma conta? se <Text className="text-secondary underline">Cadastre</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
