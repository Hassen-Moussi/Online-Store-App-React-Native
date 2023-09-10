import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


function Login ({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('username:', username);
    console.log('password:', password);
  
    if (username === 'hassen' && password === '0000') {
      alert(`Logged in as ${username}`);
      navigation.navigate('ShopOnline');
    } else {
      alert('Please enter both username and password.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default Login;
