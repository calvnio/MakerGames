import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default function BuyProducts({ navigation }) {
    return (
        <View style={styles.container}>
          <Text>This is the BUY Products screen!</Text>
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
    