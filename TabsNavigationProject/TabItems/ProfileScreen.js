import React from 'react';
import { Text, View, StyleSheet, Button, Switch} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import AuthContext from '../authContext';


function ProfileScreen({name,email,phone}) {
  //console.log(name);

  //const ctx=useContext(AuthContext);



    return (
    <View style={styles.main}>
      <View style={styles.textContainer}>
        <Text style={styles.description}>Name                : {name}</Text>
        <Text style={styles.description}>Phone               : {phone}</Text>
        <Text style={styles.description}>Email                 : {email}</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.description}>Notification      : </Text>
        <Switch trackColor={{false:'black',true:'black'}} 
                thumbColor={'darkseagreen'} 
                />
        </View>
      </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'honeydew',
      
    },
    textContainer:{
      marginHorizontal:20,
      marginTop:40
    },
    description:{
      color:'black',
      fontSize:18,
      fontWeight:'600',
    },
  });

export default ProfileScreen;






/*
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

function ProfileScreen({name,num,email}) {
  //console.log(name);
    return (
    <View style={styles.main}>
      <View style={styles.textContainer}>
        <Text style={styles.description}>Name                : {name}</Text>
        <Text style={styles.description}>Phone               : {num}</Text>
        <Text style={styles.description}>Email                 : {email}</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.description}>Notification      : </Text>
        <Switch trackColor={{false:'black',true:'black'}} 
                thumbColor={'darkseagreen'} 
                />
        </View>
      </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'honeydew',
      
    },
    textContainer:{
      marginHorizontal:20,
      marginTop:40
    },
    description:{
      color:'black',
      fontSize:18,
      fontWeight:'600',
    },
  });

export default ProfileScreen;
*/