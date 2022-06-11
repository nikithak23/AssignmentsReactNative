import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignUpPage from './Screens/SignUpPage';
import drawer from './Screens/Drawer';

const Stack = createNativeStackNavigator();



function navigPage() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignUpPage}  options={{headerShown:false}}/>
        <Stack.Screen name="drawer" component={drawer} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigPage;







/*
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignUpPage from './Screens/SignUpPage';
import drawer from './Screens/drawer';

const Stack = createNativeStackNavigator();



function navigPage() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignUpPage}  options={{headerShown:false}}/>
        <Stack.Screen name="drawer" component={drawer} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigPage;

*/