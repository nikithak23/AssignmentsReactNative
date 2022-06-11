import React,{useEffect,useState,} from 'react';
import { Text, View,Image, ImageBackground, StyleSheet,ScrollView,} from 'react-native';
import axios from "axios";
import Geolocation from 'react-native-geolocation-service';
//import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {addToRecSearch} from '../redux/actions/recSearchAcion';

import Header from '../Components/HeaderHome';
import Weather from '../Components/weatherDisplay'

const apiKey=`432de34e001214c1316747532e970b53`;

export default function HomeScreen({ navigation,route }) {

  //const searchCity = route.params;
  //console.log(route.params.searchCity);
  
  const dispatch = useDispatch();
  const dispatchAddRecent = data =>{
    dispatch(addToRecSearch(data));
  }


  const openSearch = () => {
    navigation.navigate('SearchPage');
    };
  const openMenu = () => {
      navigation.openDrawer();
      };
      const [data, setData] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [city,setCity]=useState('');

  useEffect(()=>{
    if(route.params){
      setCity(route.params.searchCity);
      //console.log(city);
      
    }
  },[route.params]);
      
   
      useEffect(() => {
        if(city){
            setIsLoading(true);
            axios.get(
                //`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
              )
              .then(response => {setData(response.data);
                dispatchAddRecent(response.data);
              })
              .catch(error => console.log(console.log(error)));
            setIsLoading(false);
          console.log('if block')
          
        }
        else{
          Geolocation.getCurrentPosition(
            position => {
              const latitude = JSON.stringify(position.coords.latitude);
              const longitude = JSON.stringify(position.coords.longitude);
              //console.log(latitude);
              //console.log(longitude);
              setIsLoading(true);
              
              axios.get(
                  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
                  //`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
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
        
          );console.log('else block')
          
        }
    },[city]);
  





return (
      <ImageBackground source={require('../Images/Home/background_android.png')} style={styles.backgroundImage}>
      <View style={styles.headerContainer}>
        <Header onPress1={openMenu} onPress2={openSearch} />
      </View>
      
      <View style={styles.contentContainer}>
        {(typeof data.main != 'undefined')?
        (<Weather data={data}/>):(<View></View>)}
      </View>
      </ImageBackground>
    );
  }

  


const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    //width:'100%'
  },
  headerContainer: {
    height: 80,
    padding: 10,
    marginHorizontal: 10,
    marginTop:10,
  },
  contentContainer:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  date:{
    marginTop:40,
    opacity:0.6,
    color:'#FFFFFF',
    fontFamily: 'Roboto',
    fontSize:13,
    letterSpacing:1.5,
    lineHeight:15,
    textAlign:'center',
  },
})














/*
import React,{useEffect,useState,} from 'react';
import { Text, View,Image, ImageBackground, StyleSheet,ScrollView,} from 'react-native';
import axios from "axios";
import moment from 'moment';
import Geolocation from 'react-native-geolocation-service';
//import Geolocation from '@react-native-community/geolocation';
var now = moment().format();
import Header from '../Components/HeaderHome';
import Weather from '../Components/weatherDisplay'

const apiKey=`432de34e001214c1316747532e970b53`
let currentDate = moment().format('ddd, Do MMM YYYY  h:mm A');
 



export default function HomeScreen({ navigation,route }) {

  //const searchCity = route.params;
  //console.log(route.params.searchCity);
  

  const openSearch = () => {
    navigation.navigate('SearchPage');
    };
  const openMenu = () => {
      navigation.openDrawer();
      };
      const [data, setData] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [city,setCity]=useState('');

  useEffect(()=>{
    if(route.params){
      setCity(route.params.searchCity);
      console.log(city);
    }
  },[route.params]);
      
   
      useEffect(() => {
      //setCity(searchCity);
        if(city){
          //const fetchUsers = async () => {
            setIsLoading(true);
            axios.get(
                //`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
              )
              .then(response => {setData(response.data);
              })
              .catch(error => console.log(console.log(error)));
            setIsLoading(false);
          //};fetchUsers();
          console.log('if block')
          
        }
        else{
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
                  //`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
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
        
          );console.log('else block')
          
        }
    },[city]);
  





return (
      <ImageBackground source={require('../Images/Home/background_android.png')} style={styles.backgroundImage}>
      <View style={styles.headerContainer}>
        <Header onPress1={openMenu} onPress2={openSearch} />
      </View>
      
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.date}>{currentDate.toUpperCase()}</Text>
        {(typeof data.main != 'undefined')?
        (<Weather data={data}/>):(<View></View>)}
      </View>

      </ScrollView>
      </ImageBackground>
    );
  }

  


const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    //width:'100%'
  },
  headerContainer: {
    height: 80,
    padding: 10,
    marginHorizontal: 10,
    marginTop:10,
  },
  contentContainer:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  date:{
    marginTop:40,
  
    opacity:0.6,
    color:'#FFFFFF',
    fontFamily: 'Roboto',
    fontSize:13,
    letterSpacing:1.5,
    lineHeight:15,
    textAlign:'center',

    
  },
})




*/