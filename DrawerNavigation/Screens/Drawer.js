import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';



import HomeScreen from '../MenuItems/HomeScreen';
import NotificationsScreen from '../MenuItems/NotificationsScreen';
import SettingsScreen from '../MenuItems/SettingsScreen';
import FAQScreen from '../MenuItems/FAQScreen';
import SignoutScreen from '../MenuItems/SignoutScreen';
import CustomSidebarMenu from '../CustomSidebarMenu';
import ProfileScreen from '../MenuItems/ProfileScreen'


const Drawer = createDrawerNavigator();

function drawer({route}) {
    const {name, phone, email}=route.params;
    console.log(name);
    console.log(phone);
    console.log(email);
    return (
        <Drawer.Navigator initialRouteName="Home"   drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        
        <Drawer.Screen name="Home"  component={HomeScreen} 
        options={{headerShown:true, title: 'Home Page', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
        <Drawer.Screen name="Profile"  children={() => <ProfileScreen name={name} email={route.params.email} phone={phone} />}
        options={{headerShown:true, title: 'Profile', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} 
        options={{headerShown:true, title: 'Notifications', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
        <Drawer.Screen name="Settings" component={SettingsScreen} 
        options={{headerShown:true, title: 'Settings', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
        <Drawer.Screen name="FAQ" component={FAQScreen} 
        options={{headerShown:true, title: 'FAQ', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
        <Drawer.Screen name="Signout" component={SignoutScreen} 
        options={{headerShown:true, title: 'Signout', headerStyle: {backgroundColor: 'darkseagreen'} }}/>

      </Drawer.Navigator>
    );
  }
  
  export default drawer;






  /*
  import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';



import HomeScreen from '../MenuItems/HomeScreen';
import NotificationsScreen from '../MenuItems/NotificationsScreen';
import SettingsScreen from '../MenuItems/SettingsScreen';
import FAQScreen from '../MenuItems/FAQScreen';
import SignoutScreen from '../MenuItems/SignoutScreen';
import CustomSidebarMenu from '../CustomSidebarMenu';


const Drawer = createDrawerNavigator();

function drawer({route}) {
    const{id}=route.params;
    return (
        <Drawer.Navigator initialRouteName="Home"   drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        
        <Drawer.Screen name="Home"  component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        <Drawer.Screen name="FAQ" component={FAQScreen}/>
        <Drawer.Screen name="Signout" component={SignoutScreen}/>

      </Drawer.Navigator>
    );
  }
  
  export default drawer;
  */