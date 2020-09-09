import React, { useState } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";

export default function Statistics({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Statistics screen!</Text>
      <View
        style={{
          width: Dimensions.get("window").width / 3,
          height: Dimensions.get("window").height / 1.5,
          borderRadius: 20,
          backgroundColor: "light grey",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
