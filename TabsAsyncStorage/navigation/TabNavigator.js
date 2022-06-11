import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FAQ from '../tabs/FAQ';
import Settings from '../tabs/Settings';
import Home from '../tabs/Home';
import Profile from '../tabs/Profile';
import Notifications from '../tabs/Notifications';
import Signout from '../tabs/SignOut';


Ionicons.loadFont().then();
const Tab = createBottomTabNavigator();

const MainTabNavigator = props => {

/*
  const CustomTabBarButton = ({children, onPress}) => {
    return (
      <TouchableOpacity
        style={{
          top: -45,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
          }}>
          {children}
        </View>
      </TouchableOpacity>
    );
  };

*/

  return (
    
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 15,
          right: 15,
          elevation: 30,
          backgroundColor: 'honeydew',
          borderRadius: 20,
          height: 80,
        },
      }}>


<Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: 'darkolivegreen'},
          headerTitleStyle: {color: 'white'},
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name="home"
                size={30}
                color={focused ? 'darkolivegreen' : '#748c94'}
              />
              <Text
                style={{color: focused ? 'darkolivegreen' : '#748c94', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />


<Tab.Screen
        name="Profile"
        children={() => (
          <Profile name={props.name} email={props.email} phone={props.phone} />
        )}
        options={{
          headerStyle: {backgroundColor: 'darkseagreen'},
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name="person"
                size={30}
                color={focused ? 'darkolivegreen' : '#748c94'}
              />
              <Text
                style={{color: focused ? 'darkolivegreen' : '#748c94', fontSize: 12}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />

<Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerStyle: {backgroundColor: 'darkseagreen'},
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name="notifications"
                size={30}
                color={focused ? 'darkolivegreen' : '#748c94'}
              />
              <Text
                style={{color: focused ? 'darkolivegreen' : '#748c94', fontSize: 12}}>
                Notifications
              </Text>
            </View>
          ),
        }}
      />

      

<Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {backgroundColor: 'darkseagreen'},
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name="settings"
                size={30}
                color={focused ? 'darkolivegreen' : '#748c94'}
              />
              <Text
                style={{color: focused ? 'darkolivegreen' : '#748c94', fontSize: 12}}>
                Settings
              </Text>
            </View>
          ),
        }}
      />



<Tab.Screen
        name="Signout"
        component={Signout}
        options={{
          headerStyle: {backgroundColor: 'darkseagreen'},
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name="log-out"
                size={30}
                color={focused ? 'darkolivegreen' : '#748c94'}
              />
              <Text
                style={{color: focused ? 'darkolivegreen' : '#748c94', fontSize: 12}}>
                Signout
              </Text>
            </View>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};
export default MainTabNavigator;

/*
<Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name="home" size={50} color="white" />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
*/



/*
<Tab.Screen
        name="FAQ"
        component={FAQ}
        options={{
          headerStyle: {backgroundColor: 'darkseagreen'},
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name="search"
                size={30}
                color={focused ? 'darkolivegreen' : '#748c94'}
              />
              <Text
                style={{color: focused ? 'darkolivegreen' : '#748c94', fontSize: 12}}>
                FAQ
              </Text>
            </View>
          ),
        }}
      />
*/