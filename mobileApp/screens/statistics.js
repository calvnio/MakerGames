import React from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";

const barHeight = Dimensions.get("window").height / 1.75;
const barWidth = Dimensions.get("window").width / 2;

export default function Statistics({ navigation }) {
  const performanceBar = StyleSheet.create({
    container: {
      width: barWidth,
      height: barHeight,
      borderRadius: 40,
      backgroundColor: "#a9a9a9",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    progress: {
      width: barWidth,
      height: barHeight / 2,
      borderRadius: 40,
      backgroundColor: "#7fff00",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <View style={performanceBar.container}>
        <View style={performanceBar.progress}>
          <Text>Sold $50k</Text>
        </View>
      </View>
      <PiggyBank />
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

const PiggyBank = (colour) => {
  return (
    <Image
      source={require("../other_icons/pigbank.png")}
      style={{ height: 100, width: 100, padding: 10 }}
    />
  );
};
