import { View, Image } from "react-native";
import React from "react";
import {
  ClockIcon,
  GifIcon,
  GiftIcon,
  HomeIcon,
  PuzzlePieceIcon,
  GlobeAltIcon,
} from "react-native-heroicons/mini";
import { Marquee } from "@animatereactnative/marquee";

export type MarqueeDirection = "up" | "left" | "right" | "down";

interface SlideInfiniteProps {
  direction: MarqueeDirection; // Match the MarqueeDirection type
}

const SlideInfinite = ({ direction = "right" }: SlideInfiniteProps) => {
  return (
    <Marquee direction={direction}>
      <View className="w-full flex-row overflow-hidden">
        {/* <Image
          className="w-[60px] h-[60px] rounded mr-8"
          source={require("../assets/images/imageFormThree.png")}
        /> */}
        <View className="w-[60px] h-[60px] rounded mr-8 bg-cyan-600 flex items-center justify-center">
          <PuzzlePieceIcon size={30} color="#eee" />
        </View>
        {/* <Image
          className="w-[60px] h-[60px] rounded mr-8"
          source={require("../assets/images/imageFormTwo.png")}
        /> */}
        <View className="w-[60px] h-[60px] rounded mr-8 bg-cyan-600 flex items-center justify-center">
          <GlobeAltIcon size={30} color="#eee" />
        </View>
        {/* <Image
          className="w-[60px] h-[60px] rounded mr-8"
          source={require("../assets/images/imageFormThree.png")}
        /> */}
        <View className="w-[60px] h-[60px] rounded mr-8 bg-cyan-600 flex items-center justify-center">
          <PuzzlePieceIcon size={30} color="#eee" />
        </View>
        {/*  */}
        {/* <Image
          className="w-[60px] h-[60px] rounded mr-8"
          source={require("../assets/images/imageFormTwo.png")}
        /> */}
        <View className="w-[60px] h-[60px] rounded mr-8 bg-cyan-600 flex items-center justify-center">
          <GlobeAltIcon size={30} color="#eee" />
        </View>
      </View>
    </Marquee>
  );
};

export default SlideInfinite;
