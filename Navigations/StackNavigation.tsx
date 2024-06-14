import React from "react";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import Form from "@/app/Form";
const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Root: undefined;
  // Add other screens here if needed
  // Login: undefined;
  // Register: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
