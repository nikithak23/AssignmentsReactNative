import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignUpPage from './Screens/SignUpPage';
import tabPage from './Screens/TabPage';
 
const Stack = createNativeStackNavigator();


export default function navigPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignUpPage}  options={{headerShown:false}}/>
        <Stack.Screen name="TabPage" component={tabPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}








/*
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignUpPage from './Screens/SignUpPage';
import tabPage from './Screens/TabPage';
 
const Stack = createNativeStackNavigator();


export default function navigPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignUpPage}  options={{headerShown:false}}/>
        <Stack.Screen name="TabPage" component={tabPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

*/