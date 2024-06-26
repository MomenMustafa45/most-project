import React from "react";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

import BottomNavigation from "@/Navigations/BottomNavigation";

type RootStackParamList = {
  Home: undefined;
  // Add other screens here if needed
  // Login: undefined;
  // Register: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

const index = () => {
  return (
    <>
      <BottomNavigation />
    </>
  );
};

export default index;
