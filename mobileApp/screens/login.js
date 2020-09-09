import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TextInput } from 'react-native';

export default function Login ({ navigation }) {

  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const loginPress = () => {
    navigation.navigate('Home', {username:text});
    setName(text);
    setText('')
  }

  return (
      <View style={styles.container}>
        <Text>This is the Login screen!</Text>
        <TextInput 
          style={styles.input} 
          value={text}
          placeholder='Enter name' 
          onChangeText={(val) => setText(val)}
          />
        <Button title='Go to home page' onPress={loginPress} />
        <Text>The stored text is {text} </Text>
        <Text>The stored name is {name} </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
  });
  