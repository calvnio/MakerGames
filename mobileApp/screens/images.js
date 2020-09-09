import React from "react";
import { Text, View, Image, Dimensions } from "react-native";

export const SellIcon = () => {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Image
        style={{
          height: Dimensions.get("window").height / 4.8,
          width: Dimensions.get("window").width / 2.5,
        }}
        source={require("../assets/saleHome.png")}
      />
      <Text style={{ fontSize: 20 }}>Sale</Text>
    </View>
  );
};

export const PerformanceIcon = () => {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Image
        style={{
          height: Dimensions.get("window").height / 4.8,
          width: Dimensions.get("window").width / 2.5,
        }}
        source={require("../assets/performanceHome.png")}
      />
      <Text style={{ fontSize: 20 }}>Performance</Text>
    </View>
  );
};

export const CustomersIcon = () => {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Image
        source={require("../assets/customersHome.png")}
        style={{
          height: Dimensions.get("window").height / 4.8,
          width: Dimensions.get("window").width / 2.5,
        }}
      />
      <Text style={{ fontSize: 20 }}>Customers</Text>
    </View>
  );
};

export const InventoryIcon = () => {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Image
        source={require("../assets/inventoryHome.png")}
        style={{
          height: Dimensions.get("window").height / 4.8,
          width: Dimensions.get("window").width / 2.5,
        }}
      />
      <Text style={{ fontSize: 20 }}>Inventory</Text>
    </View>
  );
};

export const CustomerOne = () => {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Image
        source={require("../customer_pictures/henry.png")}
        style={{
          height: Dimensions.get("window").height / 4.8,
          width: Dimensions.get("window").width / 2.5,
        }}
      />
      <Text style={{ fontSize: 20 }}>Inventory</Text>
    </View>
  );
};

export const CustomerTwo = () => {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Image
        source={require("../customer_pictures/profita.png")}
        style={{
          height: Dimensions.get("window").height / 4.8,
          width: Dimensions.get("window").width / 2.5,
        }}
      />
      <Text style={{ fontSize: 20 }}>Inventory</Text>
    </View>
  );
};

export const CustomerThree = () => {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Image
        source={require("../customer_pictures/vincent.png")}
        style={{
          height: Dimensions.get("window").height / 4.8,
          width: Dimensions.get("window").width / 2.5,
        }}
      />
      <Text style={{ fontSize: 20 }}>Inventory</Text>
    </View>
  );
};
