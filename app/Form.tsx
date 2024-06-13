import SlideInfinite from "@/components/SlideInfinite";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { HomeScreenNavigationProp } from "./index"; // Adjust the path as needed

const widthScreen = Dimensions.get("window").width;

let user = "Momen";
let pass = "123456";

const Form = () => {
  let [isLogin, setIsLogin] = useState(true);
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [isWrongInputs, setIsWrongInputs] = useState(false);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      setIsWrongInputs(false);
    }, 3000);
  }, [isWrongInputs]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 bg-[#4E08D7] flex-col py-5">
          <View className="flex-1 flex-col justify-center">
            <View className="mb-5">
              <SlideInfinite direction="left" />
            </View>
            <View>
              <SlideInfinite direction="right" />
            </View>
            <View className="mt-10 flex items-center justify-center">
              <Text className="text-white font-bold text-2xl">
                The playful way
              </Text>
              <Text className="text-white font-bold text-2xl">
                to earn rewards
              </Text>
            </View>
          </View>

          {/* Form */}
          <View className="flex-2">
            {isLogin ? (
              <>
                <TextInput
                  className="bg-white w-4/5 mx-auto px-3 py-1 my-1 rounded-md"
                  placeholder="UserName"
                  onChangeText={(text) => setUserName(text)}
                />
                <TextInput
                  className="bg-white w-4/5 mx-auto px-3 py-1 my-1 rounded-md"
                  placeholder="Password"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                />
              </>
            ) : (
              <>
                <TextInput
                  className="bg-white w-4/5 mx-auto px-3 py-1 my-1 rounded-md"
                  placeholder="First Name"
                />
                <TextInput
                  className="bg-white w-4/5 mx-auto px-3 py-1 my-1 rounded-md"
                  placeholder="Last Name"
                />
                <TextInput
                  className="bg-white w-4/5 mx-auto px-3 py-1 my-1 rounded-md"
                  placeholder="Email"
                />
                <TextInput
                  className="bg-white w-4/5 mx-auto px-3 py-1 my-1 rounded-md"
                  placeholder="Password"
                />
              </>
            )}
            {isWrongInputs && (
              <View className="flex-row justify-center mt-2">
                <Text className="text-red-600">Wrong Username or Password</Text>
              </View>
            )}

            <TouchableOpacity
              className={`mx-auto w-2/3 flex items-center justify-center rounded-md p-2 bg-[#9869f5] my-4`}
              onPress={() => {
                if (userName === user && password === pass) {
                  console.log("Success");
                  navigation.navigate("Home");
                } else {
                  console.log("Wrong username or password");
                  setIsWrongInputs(true);
                }
              }}
            >
              <Text className="text-white">
                {isLogin ? "Login" : "Register"}
              </Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
              <Text className="text-center text-white">
                {isLogin
                  ? "Don't have account yet? "
                  : "Have already account? "}
              </Text>
              <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                <Text className="text-white">
                  {isLogin ? "SignUp" : "SignIn"}
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row mt-5 justify-center">
              <TouchableOpacity>
                <Text className="text-white text-[10px]">Privacy Policy</Text>
              </TouchableOpacity>
              <Text className="text-white text-[10px]">and</Text>
              <TouchableOpacity>
                <Text className="text-white text-[10px]">Terms of Use</Text>
              </TouchableOpacity>
              <Text className="text-white text-[10px]">
                By tapping continue, you accept our app
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Form;
