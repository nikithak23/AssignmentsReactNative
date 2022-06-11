import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';


function loginSuccess({route}) {
    const{id}=route.params;
    return (
      <View style={styles.description}>
        <Text style={styles.loginDescription}>Login Succesfull. Hello {id}! </Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
    description:{
      color:'black',
      fontSize:18,
      fontWeight:'600',
      marginTop: 10
    },
    loginDescription:{
      color:'red',
      fontSize:20,
      fontWeight:'600',
      marginTop: 10,
      marginHorizontal:20
    },
  
  
  });

  
  export default loginSuccess;