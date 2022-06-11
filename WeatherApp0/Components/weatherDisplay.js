import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image,FlatList,ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {addToFav} from '../redux/actions/favAction';
Icon.loadFont().then();

const Weather=({data})=>{
  
  const [tempUnit, setTempUnit]= useState('C');
  //const [fav, setFav]= useState(false);
  const weatherIcon= data.weather[0].icon;

  const Items = useSelector(state => state.favData.items);
  const dispatch = useDispatch();
  const dispatchAddFav = data =>{
    //setFav(true);
    dispatch(addToFav(data));
  }

  const exists = data => {
    if (Items.filter(item => item.name === data.name).length > 0) {
      return true;
    }
    return false;
  };

   //useEffect(()=>{
    //  setFav(false)
 // },[data]);
   //{fav === false ? (


return(
    <View style={styles.container}>
    <Text style={styles.city}>{data.name}, {data.sys.country}</Text>
    
      {exists(data) ?(
          <TouchableOpacity onPress={() => dispatchAddFav(data)}>
            <View style={styles.favContainer}>
            <Image source={require('../Images/Weather/icon_favourite_active.png')}></Image>
            <Text style={styles.favText}>Added to favourites</Text>
            </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => dispatchAddFav(data)}>
            <View style={styles.favContainer}>
            <Image source={require('../Images/Weather/icon_favourite.png')}></Image>
            <Text style={styles.favText}>Add to favourite</Text>
            </View>
            </TouchableOpacity>
    )}



    <Image source={{ uri: `http://openweathermap.org/img/w/${weatherIcon}.png`}} style={styles.descImage}></Image>

    <View style={{flexDirection:'row'}}>
    {tempUnit === 'C' ? (
            <Text style={styles.temp}>{(data.main.temp).toFixed(0)}&deg;</Text>
          ) : (
            <Text style={styles.temp}>{(data.main.temp*1.8+32).toFixed(0)}&deg;</Text>
    )}
   <TouchableOpacity
          style={styles.tempUnit} onPress={() => setTempUnit('C')}>
          {tempUnit === 'C' ? (
            <Text style={styles.tempActive}> &deg;C</Text>
          ) : (
            <Text style={styles.tempInActive}>&deg;C</Text>
          )}
    </TouchableOpacity>
    <TouchableOpacity
          style={styles.tempUnit} onPress={() => setTempUnit('F')}>
          {tempUnit === 'F' ? (
            <Text style={styles.tempActive}>&deg;F</Text>
          ) : (
            <Text style={styles.tempInActive}>&deg;F</Text>
          )}
    </TouchableOpacity>
    </View>
    
    <Text style={styles.desc}>{(data.weather[0].description).charAt(0).toUpperCase() + (data.weather[0].description).slice(1)}</Text>

   

   <View style={styles.bottomContainer}>
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.bottomBox}>
    <Image source={require('../Images/Weather/minmax.png')}></Image>
     <View style={styles.bottomTextBox}>
     <Text style={styles.bottomDesc}>Min - Max</Text>
     {tempUnit === 'C' ? (
            <Text style={styles.bottomDescVal}>{(data.main.temp_min).toFixed(0)}&deg; - {(data.main.temp_max).toFixed(0)}&deg;</Text>
          ) : (
            <Text style={styles.bottomDescVal}>{(data.main.temp_min*1.8+32).toFixed(0)}&deg; - {(data.main.temp_max*1.8+32).toFixed(0)}&deg;</Text>
    )}
     </View>
     </View>
     <View style={styles.bottomBox}>
    <Image source={require('../Images/Weather/humidity.png')}></Image>
     <View style={styles.bottomTextBox}>
     <Text style={styles.bottomDesc}>Humidity</Text><Text style={styles.bottomDescVal}>{data.main.humidity}%</Text>
     </View>
     </View>
     <View style={styles.bottomBox}>
    <Image source={require('../Images/Weather/wind.png')}></Image>
     <View style={styles.bottomTextBox}>
     <Text style={styles.bottomDesc}>Wind Speed</Text><Text style={styles.bottomDescVal}>{data.wind.speed} m/s</Text>
     </View>
     </View>
     <View style={styles.bottomBox}>
     <Icon name="speedometer-outline" size={25} color="white"/>
     <View style={styles.bottomTextBox}>
     <Text style={styles.bottomDesc}>Pressure</Text><Text style={styles.bottomDescVal}>{data.main.pressure} hPa</Text>
     </View>
     </View>
     </ScrollView>
   </View>
   
</View>
);
}
export default Weather;


const styles = StyleSheet.create({
    container:{
    alignItems: 'center', 
    justifyContent:'center'
    },
    city:{
        fontSize:18,
        fontWeight:'500',
        color:'#FFFFFF',
        margin:5,
        textAlign:'center',
        lineHeight:21,
        letterSpacing:0,
        fontFamily:'Roboto'
    },
    favContainer:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop:15
    },
    favText:{
        fontSize:13,
        fontWeight:'500',
        color:'white',
        paddingHorizontal:5
    },
    descImage:{
        marginTop:80,
        height:90,
        width:100
    },
    temp:{
        fontSize:52,
        fontWeight:'500',
        color:'white',
        paddingRight: 10, 
    },
    tempUnit:{
        paddingTop:22
    },
    tempActive:{
        color:'red', borderWidth:1,backgroundColor:'white',borderColor:'white',paddingVertical:5,paddingHorizontal:6,fontSize:15
    },
    tempInActive:{
        color:'black',borderWidth:1,borderColor:'white',paddingVertical:5,paddingHorizontal:6,fontSize:15
    },
    desc:{
        fontSize:18,
        fontWeight:'400',
        color:'white',
        marginTop:10
    },
    bottomContainer:{
        flexDirection:'row',
        marginTop:130,
        borderTopColor:'silver',
        borderTopWidth:0.55,
        height:80
    },
    bottomBox:{
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:18,
        paddingVertical:30,
    },
    bottomTextBox:{
        flexDirection:'column',
        alignItems:'flex-start',
        paddingHorizontal:9
    },
    bottomDesc:{
        fontSize:14,
        color:'white',
    },
    bottomDescVal:{
        fontSize:15,
        color:'white',
    },
  })