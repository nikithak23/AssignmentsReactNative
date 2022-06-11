import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Months() {
  const route = useRoute();
  const { name } = route;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'purple', fontWeight:'bold', fontSize:25}}>This is the month of {name}
            </Text>
            </View>
  
  );
}

const Tab = createMaterialTopTabNavigator();

function scrollableTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarScrollEnabled:true}} >
        <Tab.Screen name="January" component={Months} />
        <Tab.Screen name="February" component={Months} />
         <Tab.Screen name="March" component={Months} />
         <Tab.Screen name="April" component={Months} />
         <Tab.Screen name="May" component={Months} />
         <Tab.Screen name="June" component={Months} />
         <Tab.Screen name="July" component={Months} />
         <Tab.Screen name="August" component={Months} />
         <Tab.Screen name="September" component={Months} />
         <Tab.Screen name="October" component={Months} />
         <Tab.Screen name="November" component={Months} />
         <Tab.Screen name="December" component={Months} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default scrollableTabs;