import React from 'react';
import { View, Text,Image, Button, StyleSheet,TextInput, SafeAreaView} from 'react-native';


function restaurantDetails({route}) {
    const{photo,restaurant,restDescription}=route.params;
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.restName}>{restaurant}</Text>
        <Text style={styles.restDesc}>{restDescription}</Text>
        <Image style={styles.bottomCards} source={{uri:(photo)}}></Image>
      </View>
    </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'pink',
      },
    main:{
      marginTop: 10
    },
    restName:{
      fontSize:20,
      color:'mediumvioletred',
      fontWeight:'bold',
      marginTop: 10,
      marginHorizontal:10
    },
    restDesc:{
      fontSize:15,
      color:'palevioletred',
      fontWeight:'bold',
      marginHorizontal:10
    },
    bottomCards:{
      padding:10, 
      margin:10, 
      
      backgroundColor:"#eddfdf", 
      width:370,height:280,
      marginTop:5,
    },
  });
  export default restaurantDetails;