import { View, Text, Platform } from "react-native";
import React from "react";
import { FireIcon } from "react-native-heroicons/mini";
import { LinearGradient } from "expo-linear-gradient";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <View className="relative flex-row justify-center">
      <View
        style={{ zIndex: 2 }}
        className="z-10 flex-row border-[1px] border-white px-3 py-2 rounded-full justify-center items-center bg-[#080613]"
      >
        <FireIcon color={"yellow"} />
        <Text className="text-white font-bold ml-2">{title}</Text>
      </View>

      <LinearGradient
        start={{ x: -2, y: 1 }}
        end={{ x: 2, y: 2 }}
        colors={["#fff", "transparent"]}
        style={{
          zIndex: 1,
          position: "absolute",
          width: "100%",
          height: 1,
          top: "50%",
        }}
        // className="absolute w-full h-1 bg-white top-1/2"
      />
    </View>
  );
};

export default SectionTitle;
