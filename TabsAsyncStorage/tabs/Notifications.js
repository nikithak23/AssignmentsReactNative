import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Notifications({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.description}>This is Notifications Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'honeydew',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  description:{
    color:'black',
    fontSize:20,
    fontWeight:'600',
  },
});

export default Notifications;