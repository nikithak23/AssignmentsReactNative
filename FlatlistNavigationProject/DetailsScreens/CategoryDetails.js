import React from 'react';
import { View, Text, Image, StyleSheet,TextInput,SafeAreaView } from 'react-native';


function categoryDetails({route}) {
    const{categName,photo}=route.params;
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.categ}>{categName}</Text>
        <Image style={styles.categImage} source={{uri:(photo)}}></Image>
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
      padding: 5,
      marginTop:15,
      marginBottom:10,
      marginHorizontal: 10,
      borderColor:'black',
      borderWidth:1,
      backgroundColor:"#eddfdf",
      borderRadius:20,
    },
    categ:{
      color:'mediumvioletred',
      fontSize:20,
      fontWeight:'bold',
      marginTop: 10,
      marginHorizontal:10
    },
    categImage:{
      width:60,
      height:60,
      borderRadius:20,
      marginHorizontal:10, 
      marginBottom:10
    },
  });
  export default categoryDetails;