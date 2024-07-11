import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View className="flex-1 bg-[#4E08D7] justify-between pb-24">
      <Text className=" text-center text-white font-bold text-lg my-8">
        Account
      </Text>

      <View>
        <Text className="text-center text-white font-bold text-2xl my-3">
          Need help?
        </Text>
        <Text className="text-center text-white font-bold text-sm">
          Visit our
        </Text>
        <Text className="text-center text-purple-400 font-bold text-sm underline">
          FAQ Page
        </Text>

        <Text className="text-center text-white font-bold text-sm mt-2">
          Or contact support
        </Text>
        <Text className="text-center text-purple-400 font-bold text-sm underline">
          hello@playfullrewards.com
        </Text>
      </View>

      <View>
        <Text className="text-center text-[#62616d] font-bold text-sm">
          Your Identifier:
        </Text>
        <Text className="text-center text-[#62616d] font-bold text-sm">
          c7e745e21-9195-42ba-4aa3-cv549754874f
        </Text>

        <Text className="text-center text-[#62616d] font-bold text-sm mt-3">
          Version:
        </Text>
        <Text className="text-center text-[#62616d] font-bold text-sm ">
          2.1.7(72)
        </Text>

        <TouchableOpacity className=" w-2/3 bg-[#28253b] mx-auto py-3 flex items-center justify-center rounded-md my-5">
          <Text className="text-white">Delete my account</Text>
        </TouchableOpacity>

        <View className="flex flex-row justify-center mt-2">
          <Text className="text-[#62616d] underline">Privacy Policy </Text>
          <Text className="text-[#62616d]">and </Text>
          <Text className="text-[#62616d] underline">Terms of Use</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
