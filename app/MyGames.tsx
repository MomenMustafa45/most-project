import { View, Text } from "react-native";
import React from "react";
import SectionTitle from "@/components/SectionTitle";

const MyGames = () => {
  return (
    <View className="flex-1 bg-[#4E08D7]">
      <View className=" my-6">
        <SectionTitle title="MY GAMES" />
      </View>
    </View>
  );
};

export default MyGames;
