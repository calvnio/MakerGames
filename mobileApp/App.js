import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import {
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Home from "./screens/home";
import BuyProducts from "./screens/buyProducts";
import Customers from "./screens/customers";
import Inventory from "./screens/inventory";
import SellProducts from "./screens/sellProducts";
import Statistics from "./screens/statistics";
import Profiles from "./screens/customerPages";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <HomeHeader />
              </TouchableOpacity>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f0ffff",
            },
          })}
        />
        <Stack.Screen
          name="Buy Products"
          component={BuyProducts}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <TouchableHighlight onPress={() => navigation.navigate("Home")}>
                <HomeHeader />
              </TouchableHighlight>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f0ffff",
            },
          })}
        />
        <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <TouchableHighlight onPress={() => navigation.navigate("Home")}>
                <HomeHeader />
              </TouchableHighlight>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f0ffff",
            },
          })}
        />
        <Stack.Screen
          name="Statistics"
          component={Statistics}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <TouchableHighlight onPress={() => navigation.navigate("Home")}>
                <HomeHeader />
              </TouchableHighlight>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f0ffff",
            },
          })}
        />
        <Stack.Screen
          name="Sell Products"
          component={SellProducts}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <TouchableHighlight onPress={() => navigation.navigate("Home")}>
                <HomeHeader />
              </TouchableHighlight>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f0ffff",
            },
          })}
        />
        <Stack.Screen
          name="Customers"
          component={Customers}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <TouchableHighlight onPress={() => navigation.navigate("Home")}>
                <HomeHeader />
              </TouchableHighlight>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f0ffff",
            },
          })}
        />
        <Stack.Screen
          name="Profiles"
          component={Profiles}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <TouchableHighlight onPress={() => navigation.navigate("Home")}>
                <HomeHeader />
              </TouchableHighlight>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f0ffff",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeHeader() {
  return (
    <Image
      style={homeIconStyle.homeButton}
      source={require("./assets/homeIcon.png")}
    />
  );
}

const homeIconStyle = StyleSheet.create({
  homeButton: {
    width: 50,
    height: 50,
  },
});
