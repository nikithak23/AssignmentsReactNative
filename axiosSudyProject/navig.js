import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import getReq from './Get';
import postReq from './Post';
import putReq from './Put';


const Stack = createNativeStackNavigator();


function navig() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Get Request"  screenOptions={{
          headerTitleAlign: 'center',headerStyle: {backgroundColor: 'darkturquoise'},headerTintColor: '#eddfdf',
          headerTitleStyle :{fontWeight: 'bold',color:'#eddfdf'},
        }}>
        <Stack.Screen name="Get Request"  component={getReq} options={{headerShown:false}} />
        <Stack.Screen name="Add User" component={postReq} options={{headerShown:true}} />
        <Stack.Screen name="Edit Details" component={putReq} options={{headerShown:true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navig;