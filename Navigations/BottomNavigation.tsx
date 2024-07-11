import Activity from "@/app/Activity";
import Home from "@/app/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import StackNavigation from "./StackNavigation";
import Rewards from "@/app/Rewards";
import MyGames from "@/app/MyGames";
import {
  ClockIcon,
  GifIcon,
  GiftIcon,
  HomeIcon,
  PuzzlePieceIcon,
} from "react-native-heroicons/mini";
import { StyleSheet } from "react-native";
import ProfileCard from "@/components/ProfileCard";
import Profile from "@/app/Profile";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        header: () => <ProfileCard />,
        tabBarStyle: styles.tabBarContainer,
        tabBarItemStyle: styles.tabBarItem,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#0071ff",
      })}
      // safeAreaInsets={{ bottom: 0 }}
    >
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={() => ({
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon size={22} color={focused ? "white" : "#0071ff"} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused }) => (
            <ClockIcon size={22} color={focused ? "white" : "#0071ff"} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({ focused }) => (
            <GiftIcon size={22} color={focused ? "white" : "#0071ff"} />
          ),
        }}
      />
      <Tab.Screen
        name="MyGames"
        component={MyGames}
        options={{
          tabBarIcon: (focused) => (
            <PuzzlePieceIcon
              size={22}
              color={focused.focused ? "white" : "#0071ff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 10,
    width: "90%",
    left: "5%",
    borderRadius: 30,
    height: 60,
    padding: 10,
    paddingBottom: 10,
    backgroundColor: "#010001",
    borderWidth: 1,
    borderColor: "#493D7B",
  },
  tabBarItem: {},
});
