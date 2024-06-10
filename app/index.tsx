import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "./Form";
const Stack = createStackNavigator();

const index = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Form} />
    </Stack.Navigator>
  );
};

export default index;
