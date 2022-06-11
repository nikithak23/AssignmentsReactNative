import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import SignUpPage from './SignUpPage';
import loginSuccess from './loginSuccess';




const Stack = createNativeStackNavigator();

function navigPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignUpPage} options={{headerShown:false}} />
        <Stack.Screen name="HomePage" component={loginSuccess} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigPage;


