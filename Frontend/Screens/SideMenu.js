import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SideMenu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Menu Items:</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Contact');
        
        }}
      >
        <Text>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SideMenu;
