//Either this current code can be used
//or
//you can use the commented out code snippet(below this code)

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './redux/store';
import {Provider} from 'react-redux';


//import StackNavigation from './navigation/StackNavigator';
import MainComponent from './Screens/MainComponent';
import CartComponent from './Screens/CartComponent';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>

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

      </NavigationContainer>
    </Provider>
  );
};

export default App;









/*
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigator';
import store from './redux/store';
import {Provider} from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>


        <StackNavigation />



      </NavigationContainer>
    </Provider>
  );
};

export default App;
*/