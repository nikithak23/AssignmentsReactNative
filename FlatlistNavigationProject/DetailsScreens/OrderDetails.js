import React from 'react';
import { View, Text,Image, StyleSheet,TextInput,SafeAreaView } from 'react-native';



function orderDetails({route}) {
    const{orderRest,orderDesc,photo}=route.params;
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.prevOrderImg} source={{uri:(photo)}}></Image>
        <Text style={styles.restName}>{orderRest}</Text>
        <Text style={styles.restDesc}>{orderDesc}</Text>
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
      marginTop: 10,
      borderColor:'black',
      borderWidth:1,
      borderRadius:15,
      marginHorizontal: 10,
      backgroundColor:"#eddfdf",
      padding:5
    },
    restName:{
      fontSize:20,
      color:'mediumvioletred',
      fontWeight:'bold',
      marginTop: 10,
      marginHorizontal:20
    },
    restDesc:{
      fontSize:15,
      color:'palevioletred',
      fontWeight:'bold',
      marginHorizontal:20
    },
    prevOrderImg:{
      width:80,
      height:80,
      marginHorizontal:20
    }
  });
  export default orderDetails;