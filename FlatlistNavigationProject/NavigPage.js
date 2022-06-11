import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import homeScreen from './HomeScreen';
import discountDetails from './DetailsScreens/DiscountDetails';
import orderDetails from './DetailsScreens/OrderDetails';
import categoryDetails from './DetailsScreens/CategoryDetails';
import restaurantDetails from './DetailsScreens/RestaurantDetails';
import search from './Search';

const Stack = createNativeStackNavigator();

function navigPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{
          headerTitleAlign: 'center',headerStyle: {backgroundColor: 'palevioletred'},headerTintColor: '#eddfdf',
          headerTitleStyle :{fontWeight: 'bold',color:'#eddfdf'},
        }}>
        <Stack.Screen name="Home"  component={homeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Discount Details" component={discountDetails} options={{headerShown:true}} />
        <Stack.Screen name="Previous Order Details" component={orderDetails} options={{headerShown:true}} />
        <Stack.Screen name="Category Details" component={categoryDetails} options={{headerShown:true}} />
        <Stack.Screen name="Restaurant Details" component={restaurantDetails} options={{headerShown:true}} />
        <Stack.Screen name="SearchPage" component={search} options={{headerShown:true}}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigPage;

