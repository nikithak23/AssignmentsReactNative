import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/store';
import {Provider} from 'react-redux';

import drawer from './Screens/drawerNavig';
import SearchPage from './Screens/search';
import SplashScreen  from './Screens/splashScreen';

const Stack = createNativeStackNavigator();

function mainNavig() {

  
  return (
    <Provider store={store}>
    <NavigationContainer>
       
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash"  component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Drawer"  component={drawer} options={{headerShown:false}} />
        <Stack.Screen name="SearchPage"  component={SearchPage} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

export default mainNavig;






/*
import React,{useEffect,useState} from 'react';
import {View,Image, ImageBackground, StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import drawer from './Screens/drawerNavig';
import SearchPage from './Screens/search';
import SplashScreen  from './Screens/splashScreen';

const Stack = createNativeStackNavigator();

function mainNavig() {

  
  return (
    <NavigationContainer>
       
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash"  component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Drawer"  component={drawer} options={{headerShown:false}} />
        <Stack.Screen name="SearchPage"  component={SearchPage} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default mainNavig;


*/