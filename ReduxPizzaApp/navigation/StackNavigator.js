//This part is already embedded in the App.js code itself. So this file can be deleted
//However, in App.js, if youre using the commented out code snippet(below the current code), then this file needs to be imported into the App.js file
//So for later requirement, dont delete this file, just keep it



import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainComponent from '../Screens/MainComponent';
import CartComponent from '../Screens/CartComponent';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MainComponent}
        name="MainComponent"
        options={{headerShown: false}}
      />
      <Stack.Screen 
        component={CartComponent} 
        name="Cart" 
        options={{
          headerStyle: {backgroundColor: 'burlywood'},
          headerTitleStyle: {color: 'black'},
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
