import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../DrawerScreens/homeScreen';
import FavouritesScreen from '../DrawerScreens/favourite';
import RecentsScreen from '../DrawerScreens/recentSearch';


const Drawer = createDrawerNavigator();

export default function drawer({route}) {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Drawer.Screen name="Favourite" component={FavouritesScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="Recent Search" component={RecentsScreen} options={{headerShown:false}}/>
      </Drawer.Navigator>
  );
}




/*
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../DrawerScreens/homeScreen';
import FavouritesScreen from '../DrawerScreens/favourite';
import RecentsScreen from '../DrawerScreens/recentSearch';


const Drawer = createDrawerNavigator();

export default function drawer({route}) {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Drawer.Screen name="Favourite" component={FavouritesScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="Recent Search" component={RecentsScreen} options={{headerShown:false}}/>
      </Drawer.Navigator>
  );
}


*/