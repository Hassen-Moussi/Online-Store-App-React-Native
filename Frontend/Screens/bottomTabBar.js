import React from 'react';
import Home from './Home';
import Profile from './Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from './Contact';
import { Ionicons } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
  
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Contact" component={Contact} options={{
    tabBarLabel: 'Contact',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="person" color={color} size={size} />
    ),
  }}/>
        <Tab.Screen name="Profile" component={Profile}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
  );
}

export default BottomBar;
