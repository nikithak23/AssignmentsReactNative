import * as React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

function ProfileScreen({name,email,phone}) {
  
 
    return (
      <View style={styles.main}>
        <View style={styles.textContainer}>
        <Text style={styles.description}>Name:{name}</Text>
        <Text style={styles.description}>Email:{email}</Text>
        <Text style={styles.description}>Phone Number:{phone}</Text>
        </View>
      </View>
    );
  }


  export default ProfileScreen;
  

  const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'honeydew',
    },
    textContainer:{
      marginVertical:60,
      marginHorizontal:30
    },
    description:{
      color:'black',
      fontSize:18,
      fontWeight:'600',
    }
  });
  