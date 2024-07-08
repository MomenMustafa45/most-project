import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ButtonAnimation from "@/components/ButtonAnimation";
// import notifee from "@notifee/react-native";

const Activity = () => {
  // async function onDisplayNotification() {
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission();

  //   // Create a channel (required for Android)
  //   const channelId = await notifee.createChannel({
  //     id: "default",
  //     name: "Default Channel",
  //   });

  //   // Display a notification
  //   await notifee.displayNotification({
  //     title: "Notification Title",
  //     body: "Main body content of the notification",
  //     android: {
  //       channelId,
  //       smallIcon: "name-of-a-small-icon", // optional, defaults to 'ic_launcher'.
  //       // pressAction is needed if you want the notification to open the app when pressed
  //       pressAction: {
  //         id: "default",
  //       },
  //     },
  //   });
  // }

  return (
    <View className="justify-center items-center flex-1">
      <TouchableOpacity>
        <Text>Notify me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Activity;
