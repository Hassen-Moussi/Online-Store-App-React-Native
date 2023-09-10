import React from 'react';
import Home from './Home';
import Profile from './Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from './Contact';




const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
  
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}

export default BottomBar;
