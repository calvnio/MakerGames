import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Button,
  TextInput,
} from "react-native";

export default function SellProducts({ navigation }) {
  const [value, setValue] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>This is the SELL Products screen!</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (value == 0) setValue(0);
              else setValue(value - 1);
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#bf48a3",
                alignItems: "center",
                justifyContent: "center",
                shadowOpacity: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 40,
                  color: "white",
                }}
              >
                —
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 100,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              keyboardType="numeric"
              style={{
                height: 80,
                width: 80,
                borderColor: "gray",
                textAlign: "center",
                borderRadius: 20,
                alignContent: "center",
                borderWidth: 1,
              }}
              value={value.toString()}
              fontSize={25}
              onChangeText={(text) => {
                if (parseInt(text, 10) <= 100) setValue(parseInt(text, 10));
                if (text == "") setValue(0);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (value < 100) setValue(value + 1);
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#bf48a3",
                alignItems: "center",
                justifyContent: "center",
                shadowOpacity: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 40,
                  color: "white",
                }}
              >
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text> Quantity: {value}</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#f0ffff",
          flex: 0.2,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Customers", {
              fromHome: true,
              quantity: value,
            });
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#bf48a3",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 40,
              }}
            >
              {">"}
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Click Here to Proceed!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: "#f0ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 80,
    width: 80,
  },
});
