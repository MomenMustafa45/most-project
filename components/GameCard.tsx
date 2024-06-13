import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChevronRightIcon,
  CurrencyDollarIcon,
} from "react-native-heroicons/mini";

const GameCard = () => {
  return (
    <View className="w-[85%] mx-auto bg-[#C514B0] p-2 rounded-2xl my-2 shadow-lg">
      <Image
        source={require("../assets/images/HomeGameOne.png")}
        className="w-full rounded-md"
      />
      {/*  */}
      <View className="flex-row items-center justify-between pr-20 my-4">
        <View>
          <Text className="text-white text-[13px]">Earn up to</Text>

          <View className="flex-row items-center">
            <CurrencyDollarIcon color={"yellow"} />
            <Text className="ml-2 text-white font-bold">$5.00</Text>
          </View>
        </View>
        <Text className="text-white font-bold">Sirius XM</Text>
      </View>
      {/*  */}
      <TouchableOpacity className="flex-row justify-center w-3/4 mx-auto bg-[#FFEE1A] py-2 rounded-md my-2">
        <ChevronRightIcon color={"black"} />
        <Text className="font-bold">Start Playing</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameCard;
