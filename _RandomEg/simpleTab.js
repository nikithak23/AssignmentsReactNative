import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >


        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}





/*
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import moment from 'moment';
var now = moment().format();
const apiKey=`432de34e001214c1316747532e970b53`
//import Weather from './Weather';





const Weather=({data})=>{
  const [tempUnit, setTempUnit]= useState('C');
 // console.log(data);
return(
  <View>
  <Text>{data.name}, {data.sys.country}</Text>
  <Text>Add to favourites</Text>
  <View style={{flexDirection:'row'}}>
  {tempUnit === 'C' ? (
          <Text>{data.main.temp} &deg;C</Text>
        ) : (
          <Text>{(data.main.temp*1.8)+32} &deg;F</Text>
        )}
  

  <TouchableOpacity
        style={{paddingTop: 0, paddingLeft: 10, }}
        onPress={() => setTempUnit('C')}>
        {tempUnit === 'C' ? (
          <Text style={{color:'red', borderWidth:1,backgroundColor:'white',borderColor:'white'}}> &deg;C</Text>
        ) : (
          <Text style={{color:'black',borderWidth:1,borderColor:'white'}}>&deg;C</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={{paddingTop: 0}}
        onPress={() => setTempUnit('F')}>
        {tempUnit === 'F' ? (
          <Text style={{color:'red', borderWidth:1,backgroundColor:'white',borderColor:'white'}}>&deg;F</Text>
        ) : (
          <Text style={{color:'black',borderWidth:1,borderColor:'white'}}>&deg;F</Text>
        )}
      </TouchableOpacity>

  </View>
  <Text>{data.weather[0].description}</Text>
  <Text>Min - Max</Text>
  <Text>{(data.main.temp_min).toFixed(0)}&deg;C - {(data.main.temp_max).toFixed(0)}&deg;C</Text>
  <Text>Humidity: {data.main.humidity}%</Text>
  <Text>Wind Speed: {data.wind.speed} m/s</Text>
  <Text>Pressure: {data.main.pressure} hPa</Text>
  </View>
);
}







const Location=()=>{

  var Date = moment().format('ddd, Do MMM YYYY  h:mm A');
 
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredText,setEnterdText]=useState('');
  

  useEffect(() => {
    setEnterdText("France");
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        //console.log(latitude);
        //console.log(longitude);
        setIsLoading(true);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
        //`https://api.openweathermap.org/data/2.5/weather?q=${enteredText}&appid=${apiKey}&units=metric`,
          )
          .then(response => {setData(response.data);
          })
          .catch(error => console.log(console.log(error)));
        setIsLoading(false);
        
      },
      error => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 200000,
        maximumAge: 1000,
      },
      
    );console.log('request')
},[]);


  return(
    <View>
        <Text>{Date}</Text>
        {(typeof data.main != 'undefined')?
        (<Weather data={data}/>):(<View></View>)}
    </View>
  );
}
export default Location;




const styles = StyleSheet.create({
  ActiveBtn: {
    alignItems: 'center',
    textAlign:'center',
    borderColor:'black',
    borderWidth:1,
    padding:5,
    backgroundColor:'red'
  },
  InActiveBtn: {
      alignItems: 'center',
      textAlign:'center',
      borderColor:'black',
      borderWidth:'1',
      padding:5,
      backgroundColor:'grey'
    },
})
*/