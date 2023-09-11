import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Contact from './Screens/Contact';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import BottomBar from './Screens/bottomTabBar';
import ItemDetail from './Screens/ItemDetail';
import Signup from './Screens/Signup';
import CartScreen from './Screens/CartScreen';


const Stack = createStackNavigator();


function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ShopOnline" component={BottomBar} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
