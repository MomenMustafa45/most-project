import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { ChevronRightIcon } from "react-native-heroicons/mini";

const ButtonAnimation = () => {
  const animation = useRef(new Animated.Value(0));
  const inputRange = [0, 1];
  const outputRange = [0.8, 1];
  const scale = animation.current.interpolate({ inputRange, outputRange });

  const fadeInOut = () => {
    Animated.loop(
      Animated.timing(animation.current, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      })
    ).start();
  };
  useEffect(() => {
    fadeInOut();
  }, []);
  return (
    <Animated.View
      style={{ transform: [{ scale }] }}
      className="flex-row items-center justify-center"
    >
      <TouchableOpacity className="flex-row justify-center w-3/4 mx-auto bg-[#FFEE1A] py-2 rounded-md my-2">
        <ChevronRightIcon color={"black"} />
        <Text className="font-bold">Start Playing</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ButtonAnimation;
