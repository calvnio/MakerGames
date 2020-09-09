import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

export default function CustomerPages({ route, navigation }) {
  const { details } = route.params;
  console.log({ details });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f0ffff",
      }}
    >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        {details.name}'s Profile
      </Text>
      <Image
        style={{
          height: Dimensions.get("window").height / 4,
          width: Dimensions.get("window").width / 2,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "white",
        }}
        source={details.image}
      />
      <Text>This is {details.name}</Text>
      <Text>Their mobile number is {details.mobile}</Text>
    </View>
  );
}
