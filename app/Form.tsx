import SlideInfinite from "@/components/SlideInfinite";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const widthScreen = Dimensions.get("window").width;

const Form = () => {
  return (
    <View className="flex-1 bg-[#4E08D7] flex-col py-5">
      <View className="flex-1 flex-col justify-center">
        <View className="mb-5">
          <SlideInfinite direction="left" />
        </View>
        <View>
          <SlideInfinite direction="right" />
        </View>
        <View className="mt-10 flex items-center justify-center">
          <Text className="text-white font-bold text-2xl">The playful way</Text>
          <Text className="text-white font-bold text-2xl">to earn rewards</Text>
        </View>
      </View>

      {/* Form */}
      <View className="flex-2">
        <TextInput
          className="bg-white w-4/5 mx-auto px-3 py-1 my-1 rounded-md"
          placeholder="UserName"
        />
        <TextInput
          className="bg-white w-4/5 mx-auto px-3 py-1 my-1 rounded-md"
          placeholder="Password"
        />
        <TouchableOpacity
          className={`mx-auto w-2/3 flex items-center justify-center rounded-md p-2 bg-[#9869f5] my-4`}
        >
          <Text className="text-white">Login</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center">
          <Text className="text-center text-white">
            Don't have account yet?{" "}
          </Text>
          <TouchableOpacity>
            <Text className="text-white">SignUp</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row mt-5">
          <TouchableOpacity>
            <Text className="text-white text-xs">Privacy Policy</Text>
          </TouchableOpacity>
          <Text className="text-white text-xs">and</Text>
          <TouchableOpacity>
            <Text className="text-white text-xs">Terms of Use</Text>
          </TouchableOpacity>
          <Text className="text-white text-xs">
            By tapping continue, you accept our app
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Form;
