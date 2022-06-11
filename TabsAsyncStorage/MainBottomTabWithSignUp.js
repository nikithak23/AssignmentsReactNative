import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackNavigator from './navigation/StackNavigator';
import {AuthContextProvider} from './store/auth-context';

const MainBottomTabWithSignup = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
};
export default MainBottomTabWithSignup;