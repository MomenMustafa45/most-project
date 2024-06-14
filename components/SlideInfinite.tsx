import { View, Image } from "react-native";
import React from "react";

export type MarqueeDirection = "up" | "left" | "right" | "down";

import { Marquee } from "@animatereactnative/marquee";
interface SlideInfiniteProps {
  direction: MarqueeDirection; // Match the MarqueeDirection type
}

const SlideInfinite = ({ direction = "right" }: SlideInfiniteProps) => {
  return (
    <Marquee direction={direction}>
      <View className="w-full flex-row overflow-hidden">
        <Image
          className="w-[60px] h-[60px] rounded mr-8"
          source={require("../assets/images/imagesFormOne.png")}
        />
        <Image
          className="w-[60px] h-[60px] rounded mr-8"
          source={require("../assets/images/imageFormTwo.png")}
        />
        <Image
          className="w-[60px] h-[60px] rounded mr-8"
          source={require("../assets/images/imageFormThree.png")}
        />
        <Image
          className="w-[60px] h-[60px] rounded mr-8"
          source={require("../assets/images/imageFormFour.png")}
        />
      </View>
    </Marquee>
  );
};

export default SlideInfinite;
