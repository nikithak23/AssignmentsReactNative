import React, { Component, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../TabItems/HomeScreen';
import NotificationsScreen from '../TabItems/NotificationsScreen';
import SettingsScreen from '../TabItems/SettingsScreen';
import FAQScreen from '../TabItems/FAQScreen';
import SignoutScreen from '../TabItems/SignoutScreen';
import ProfileScreen from '../TabItems/ProfileScreen';


const Tab = createBottomTabNavigator();


function tabPage({route}) {
    const {name,email,phone} =route.params;
    //console.log(name);
    //console.log(num);
    //console.log(email);
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {iconName = focused? 'home': 'home-outline';
          } else if (route.name === 'Profile') {iconName = focused ? 'person' : 'person-outline';
          } else if (route.name ==='Notifications') {iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Settings') {iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'FAQ') {iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Signout') {iconName = focused ? 'log-out' : 'log-out-outline';
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'darkolivegreen',
          tabBarInactiveTintColor: 'darkolivegreen',
        })}
        >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{headerShown:true, title: 'Home', headerStyle: {backgroundColor: 'darkseagreen'} }} />
        <Tab.Screen name="Profile" children={() => <ProfileScreen name={name} email={route.params.email} phone={phone} />}
        options={{headerShown:true, title: 'Profile', headerStyle: {backgroundColor: 'darkseagreen'} }}  />
        <Tab.Screen name="Notifications" component={NotificationsScreen} 
        options={{headerShown:true, title: 'Notifications', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{headerShown:true, title: 'Settings', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
      </Tab.Navigator>
    );
  } 
  export default tabPage;
  /*
  <Tab.Screen name="FAQ" component={FAQScreen} 
  options={{headerShown:true, title: 'FAQ', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
  <Tab.Screen name="Signout" component={SignoutScreen} 
  options={{headerShown:true, title: 'Signout', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
  */











  


  /*
import React, { Component, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../TabItems/HomeScreen';
import NotificationsScreen from '../TabItems/NotificationsScreen';
import SettingsScreen from '../TabItems/SettingsScreen';
import FAQScreen from '../TabItems/FAQScreen';
import SignoutScreen from '../TabItems/SignoutScreen';
import ProfileScreen from '../TabItems/ProfileScreen';


const Tab = createBottomTabNavigator();


function tabPage({route}) {
    const {name, num, email} =route.params;
    //console.log(name);
    //console.log(num);
    //console.log(email);
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {iconName = focused? 'home': 'home-outline';
          } else if (route.name === 'Profile') {iconName = focused ? 'person' : 'person-outline';
          } else if (route.name ==='Notifications') {iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Settings') {iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'FAQ') {iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Signout') {iconName = focused ? 'log-out' : 'log-out-outline';
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'darkolivegreen',
          tabBarInactiveTintColor: 'darkolivegreen',
        })}
        >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{headerShown:true, title: 'Home', headerStyle: {backgroundColor: 'darkseagreen'} }} />
        <Tab.Screen name="Profile" children={() => <ProfileScreen name={route.params.name} num={route.params.num} email={route.params.email}/>}
        options={{headerShown:true, title: 'Profile', headerStyle: {backgroundColor: 'darkseagreen'} }}  />
        <Tab.Screen name="Notifications" component={NotificationsScreen} 
        options={{headerShown:true, title: 'Notifications', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
        <Tab.Screen name="FAQ" component={FAQScreen} 
        options={{headerShown:true, title: 'FAQ', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
        <Tab.Screen name="Signout" component={SignoutScreen} 
        options={{headerShown:true, title: 'Signout', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{headerShown:true, title: 'Settings', headerStyle: {backgroundColor: 'darkseagreen'} }}/>
      </Tab.Navigator>
    );
  } 
  export default tabPage;

  
  */

