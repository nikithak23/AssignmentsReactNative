import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {store,persistor} from './redux/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'

import DrawerScreen from './Screens/drawerNavig';
import SearchPage from './Screens/search';
import SplashScreen  from './Screens/splashScreen';

const Stack = createNativeStackNavigator();

function mainNavig() {

  
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash"  component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Drawer"  component={DrawerScreen} options={{headerShown:false}} />
        <Stack.Screen name="SearchPage"  component={SearchPage} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
    
  );
}

export default mainNavig;





