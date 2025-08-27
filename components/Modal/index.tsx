import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import Overlay from "../Overlay";
import Button from "../Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicModalProps } from "@/interfaces/components/Modal";



export default function BasicModal({ title, subtitle }: BasicModalProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 flex justify-center items-center bg-black bg-opacity-20 relative z-20">
      <Button
        action={() => setModalVisible(true)}
        text="Open Modal"
        colorVariant="primary"
        fontVariant="default"
        sizeVariant="fit"
      />
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
        className="flex h-full w-full justify-center items-center"
      >
        <Overlay/>
        <View className="h-fit w-fit bg-white rounded-2xl gap-10 p-4 justify-center items-center text-center flex flex-col absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20">
          <Text className="font-semibold text-xl z-20">{title}</Text>
          <Text className="text-center text-sm">{subtitle}</Text>

          <View className="flex flex-row gap-4 w-full justify-center">
            <Button
              action={() => setModalVisible(false)}
              text="Cancelar"
              colorVariant="transparent"
              fontVariant="default"
              sizeVariant="fit"
            />

            <Button
              action={() => setModalVisible(false)}
              text="Confirmar"
              colorVariant="primary"
              fontVariant="default"
              sizeVariant="fit"
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
