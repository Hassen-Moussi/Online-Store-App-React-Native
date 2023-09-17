import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
  Image

} from "react-native";
import React, { useState } from "react";
import {Login} from "../Services/ApiService";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../consts/colors";
import AsyncStorage from '@react-native-async-storage/async-storage';


  function LoginPage ({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
      console.log('username:', username);
      console.log('password:', password);
    
      if (username && password) {
        try {
          const response = await Login(username, password);
    
          if (response && response.success) {
            alert('Login Successful');
            console.log(response.data.data.id)
            await AsyncStorage.setItem('id',response.data.data.id);
            navigation.navigate('Home');
          } else {
            alert(response.message || 'Login failed');
          }
        } catch (error) {
          alert('An error occurred during login.');
          console.error('Error during login:', error);
        }
      } else {
        alert('Please enter both username and password.');
      }
    };
    
    
    
    

    return (
      <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center",marginTop:50  }}
    >
      <View>
          <Image
            style={{ width: 150, height: 100 }}
            source={{
              uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
            }}
          />
        </View>
      
      <View style={styles.container}>
      
        <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 12,
                color: "#041E42",
              }}
            >
              Login to your Account
            </Text>
          </View>
          <View style={{ marginTop: 70 }}>
          <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
            <Ionicons
                name="ios-person"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
        <TextInput
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: username ? 16 : 16,
                }}
                placeholder="enter your username"
              />
              </View>
              <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <AntDesign
                name="lock1"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
        <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: username ? 16 : 16,
                }}
                placeholder="enter your Password"
              />
        </View>
        </View>
        </View>
        <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Keep me logged in</Text>
  
            <Text style={{ color: "#007FFF", fontWeight: "500" }}>
              Forgot Password
            </Text>
          </View>
          <View style={{ marginTop: 80 }} />
          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: COLORS.green,
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </Pressable>
  
          <Pressable
            onPress={() => navigation.navigate('Signup')}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Dont have an account? Sign Up
            </Text>
          </Pressable>
      </View>
      </SafeAreaView>
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

  export default LoginPage;
