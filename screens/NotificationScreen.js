import React from "react";
import { Text, View, StyleSheet } from "react-native";

function NotificationScreen() {
  return (
    <View style={styles.screen}>
      <Text>This is the Notifications Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotificationScreen;