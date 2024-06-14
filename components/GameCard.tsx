import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChevronRightIcon,
  CurrencyDollarIcon,
} from "react-native-heroicons/mini";
import ButtonAnimation from "./ButtonAnimation";
interface CardProps {
  image: string | any;
  price: number;
  title: string;
}

const GameCard = ({ image, price, title }: CardProps) => {
  return (
    <View className="w-[85%] mx-auto bg-[#C514B0] p-2 rounded-2xl my-2 shadow-lg">
      <Image source={image} className="w-full rounded-md" />
      {/*  */}
      <View className="flex-row items-center justify-between pr-20 my-4">
        <View>
          <Text className="text-white text-[13px]">Earn up to</Text>

          <View className="flex-row items-center">
            <CurrencyDollarIcon color={"yellow"} />
            <Text className="ml-2 text-white font-bold">${price}</Text>
          </View>
        </View>
        <Text className="text-white font-bold">{title}</Text>
      </View>
      {/*  */}

      <ButtonAnimation />
    </View>
  );
};

export default GameCard;
