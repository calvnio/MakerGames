import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  SellIcon,
  PerformanceIcon,
  CustomersIcon,
  InventoryIcon,
} from "./images";

export default function Home({ route, navigation }) {
  //const { username } = route.params;
  const windowSize = Dimensions.get("window");
  const username = "Calvin";
  console.log(route.params, username);
  console.log(windowSize.height, windowSize.width);

  const ToInventoryPage = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Inventory")}>
        <InventoryIcon />
      </TouchableOpacity>
    );
  };

  const ToPerformancePage = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Statistics")}>
        <PerformanceIcon />
      </TouchableOpacity>
    );
  };

  const ToSellPage = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Sell Products")}>
        <SellIcon />
      </TouchableOpacity>
    );
  };

  const ToCustomersPage = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Customers", { fromHome: false })}
      >
        <CustomersIcon />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
        Welcome to the Home Page!
      </Text>
      <View style={{ flexDirection: "row" }}>
        <ToSellPage />
        <ToPerformancePage />
      </View>
      <View style={{ flexDirection: "row" }}>
        <ToCustomersPage />
        <InventoryIcon />
      </View>
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
  icon: {
    width: 50,
    height: 50,
    resizeMode: "center",
    padding: 200,
  },
});
