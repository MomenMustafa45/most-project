import { View, Text } from "react-native";
import React from "react";
import { CircleStackIcon, FlagIcon } from "react-native-heroicons/mini";
import { LinearGradient } from "expo-linear-gradient";

const OfferCard = () => {
  return (
    <LinearGradient
      colors={["#bb52aa", "#63ff85"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: 15, // <-- Inner Border Radius
        // flex: 1,
        margin: 20, // <-- Border Width
        // backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        width: "85%",
        overflow: "hidden",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <View className="w-full bg-[#2D1069] px-3 py-3 rounded-lg shadow-lg shadow-slate-400">
        <View className="flex-row">
          <FlagIcon color={"white"} />
          <Text className="ml-2 text-white">Keep it going</Text>
        </View>
        {/*  */}
        <View className="flex-row justify-between items-center my-3">
          <View className="flex-row">
            <CircleStackIcon color={"yellow"} size={15} />
            <Text className="text-white text-[10px] ml-1">1000</Text>
          </View>
          <View>
            <Text className="text-white text-[10px]">
              Play your first game and round Milestone 1
            </Text>
          </View>
          {/* circle check */}
          <View className="w-[10px] h-[10px] border-[1px] border-white rounded-full"></View>
        </View>
        {/*  */}
        <View className="flex-row justify-between items-center my-3">
          <View className="flex-row">
            <CircleStackIcon color={"yellow"} size={15} />
            <Text className="text-white text-[10px] ml-1">1000</Text>
          </View>
          <View>
            <Text className="text-white text-[10px]">
              Play your first game and round Milestone 1
            </Text>
          </View>
          {/* circle check */}
          <View className="w-[10px] h-[10px] border-[1px] border-white rounded-full"></View>
        </View>
        {/*  */}
        <View className="flex-row justify-between items-center my-3">
          <View className="flex-row">
            <CircleStackIcon color={"yellow"} size={15} />
            <Text className="text-white text-[10px] ml-1">1000</Text>
          </View>
          <View>
            <Text className="text-white text-[10px]">
              Play your first game and round Milestone 1
            </Text>
          </View>
          {/* circle check */}
          <View className="w-[10px] h-[10px] border-[1px] border-white rounded-full"></View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default OfferCard;
