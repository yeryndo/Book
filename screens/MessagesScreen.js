import React from "react";
import { Text, View, StyleSheet } from "react-native";

function MessagesScreen() {
  return (
    <View style={styles.screen}>
      <Text>This is the Messages Screen</Text>
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

export default MessagesScreen;