import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IllustrationAirport from "../../../../assets/images/illustrations/IllustrationAirport.svg";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function SignUp() {

    const goToSignIn = () => {
        router.replace("/screens/Auth/SignIn/signIn");
    }

  return (
    <SafeAreaView className="flex-1 flex-col items-center bg-white">
      <View className="flex items-center justify-center w-full h-fit p-4 rounded-br-[64px] bg-primary">
        <IllustrationAirport width={300} height={300} />
      </View>

      <View className="flex flex-col items-center justify-center w-full h-fit mt-7">
        <View className="w-[80%] h-full gap-6 flex flex-col">
          <Text className="text-4xl font-poppins-semibold">Cadastrar</Text>
          <View className="flex flex-col gap-10">
            <Input
              label="Nome"
              placeholder="Digite o seu nome"
              secureTextEntry={true}
            />
            <Input label="Email" placeholder="Digite o email" />
            <Input
              label="Senha"
              placeholder="Digite a sua senha"
              secureTextEntry={true}
            />
          </View>

          <Button
            colorVariant="primary"
            fontVariant="default"
            sizeVariant="default"
            text="Criar conta"
          />

          <View className="flex flex-row items-center justify-center gap-2 mt-4">
            <View className="border-b border-b-black w-[90px]" />
            <Text className="font-poppins-semibold">ou</Text>
            <View className="border-b border-b-black w-[90px] " />
          </View>

          <Text className="text-center font-poppins-semibold text-base">
            Já tem uma conta? Faça{" "}
            <Text className="text-secondary underline" onPress={goToSignIn}>Login</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
