import * as React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailSceen from './src/Screens/DetailScreen';
import Login from './src/Screens/Login';
import RegisterScreen from './src/Screens/Signup';
import Profile from './src/Screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
 
    <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
       <Stack.Screen name="Details" component={DetailSceen} />
       <Stack.Screen name="login" component={Login} />
       <Stack.Screen name="Signup" component={RegisterScreen} />
       <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


