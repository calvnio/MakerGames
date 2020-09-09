import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default function Inventory({ navigation }) {

    const inventPress = () => {
        navigation.navigate('Buy Products')
    }

    return (
        <View style={styles.container}>
          <Text>This is the Inventory screen!</Text>
          <Button title='Go to Buy Products page' onPress={inventPress} />
          <StatusBar style="auto" />
        </View>
      );
  }
  
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffa500',
    alignItems: 'center',
    justifyContent: 'center',
    },
});