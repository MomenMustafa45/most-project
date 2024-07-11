import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CircleStackIcon } from "react-native-heroicons/mini";

const Activity = () => {
  return (
    <View className="justify-center items-center flex-1 bg-[#4E08D7] px-4">
      <View className="py-5 w-full">
        <Text className=" text-xl text-white font-bold">All activity</Text>
      </View>
      <View className="flex-1">
        {/* activity card */}
        <View className="flex flex-row items-center justify-between w-full  border-b-[1px] py-5 border-b-[#eee]">
          <View>
            <Text className="text-white text-sm">You earned</Text>
            <View className="flex flex-row">
              <View className="flex flex-row">
                <CircleStackIcon color={"yellow"} size={15} />
                <Text className="text-white font-bold">+4,000</Text>
              </View>
              <View>
                <Text className="text-white">Playful Reward</Text>
                <Text className="text-white text-xs">finish onboarding</Text>
              </View>
            </View>
          </View>
          {/* right side */}
          <View>
            <View className="w-5 h-5 bg-red-700 rounded-full"></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Activity;
