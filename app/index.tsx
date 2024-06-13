import React from "react";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import Form from "./Form";
import Home from "./Home";
const Stack = createStackNavigator();

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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default index;
