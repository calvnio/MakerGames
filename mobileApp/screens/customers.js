import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { CustomerOne, CustomerTwo, CustomerThree } from "./images";
import { Profiles } from "../customer_pictures/customer-info";

export default function Customers({ route, navigation }) {
  const { fromHome } = route.params;
  const { quantity } = route.params;
  console.log(Profiles, fromHome, quantity);

  if (fromHome == true) {
    if (Profiles[0].name != "New User")
      Profiles.unshift({
        name: "New User",
        image: require("../assets/customersHome.png"),
      });
  } else {
    if (Profiles[0].name == "New User") Profiles.shift();
  }

  const renderCustomer = ({ item }) => (
    <View style={{ aligntems: "center", padding: 10 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profiles", { details: item });
        }}
      >
        <Image
          style={{
            height: Dimensions.get("window").height / 5,
            width: Dimensions.get("window").width / 3,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "white",
          }}
          source={item.image}
        />
        <Text style={{ fontSize: 18, alignItems: "center" }}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
        This is the Customers screen!
      </Text>
      <FlatList
        data={Profiles}
        renderItem={renderCustomer}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0ffff",
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: 32,
  },
});
