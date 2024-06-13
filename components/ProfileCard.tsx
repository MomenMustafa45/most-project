import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CircleStackIcon, UserCircleIcon } from "react-native-heroicons/mini";

const ProfileCard = () => {
  return (
    <View className="w-full h-[100px] bg-slate-500 py-3 px-4 justify-between">
      {/* box */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className="flex-row items-center bg-black mr-4 rounded px-3 py-1">
            <CircleStackIcon color={"yellow"} size={15} />
            <Text className="text-white text-xs ml-1">4000</Text>
          </View>
          <View>
            <Text className="text-white text-xs">Let's start earning</Text>
          </View>
        </View>

        <TouchableOpacity>
          <UserCircleIcon color={"white"} size={30} />
        </TouchableOpacity>
      </View>
      {/* box */}
      <View className="flex-row items-center">
        <View className="w-2/3 bg-yellow-500 flex-row items-center justify-center relative rounded-xl overflow-hidden">
          <LinearGradient
            end={{ x: 0.7, y: 0.1 }}
            // Background Linear Gradient
            colors={["#FA6400", "#FFB703"]}
            className="absolute top-0 right-0 left-0 h-full"
          />
          <CircleStackIcon
            color={"yellow"}
            size={15}
            style={{ position: "absolute", left: 5 }}
          />
          <Text className="font-bold">4,000/0</Text>
        </View>
        <Text className="text-xs ml-2 text-white font-bold">
          Next Payout $0.00
        </Text>
      </View>
    </View>
  );
};

export default ProfileCard;
