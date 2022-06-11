import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpPage from '../screens/SignUpPage';
import tabScreen from '../screens/TabScreen';
import SplashScreen from '../screens/splash-screen';
import {useContext} from 'react';
import AuthContext from '../store/auth-context';
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const ctx = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      {!ctx.isLoggedIn && (
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{headerShown: false}}
        />
      )}

      <Stack.Screen
        name="TabPage"
        component={tabScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;