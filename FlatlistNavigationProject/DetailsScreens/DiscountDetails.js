import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, Button, StyleSheet,TextInput, SafeAreaView} from 'react-native';


function discountDetails({route}) {
    const{photo}=route.params;
    
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.description}>This is Discount Details Page</Text>
        <Image style={styles.topCards} source={{uri:(photo)}}></Image>
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
    },
    description:{
      color:'mediumvioletred',
      fontSize:20,
      fontWeight:'bold',
      marginTop: 10,
      marginHorizontal:20
    },
    topCards:{
        padding:10, 
        margin:10 , 
        backgroundColor:"#eddfdf", 
        width:250,
        height:150, 
        marginBottom:15,
        marginHorizontal:20
      }
  });
  export default discountDetails;

