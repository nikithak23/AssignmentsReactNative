import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

import {useContext} from 'react';
import AuthContext from '../store/auth-context';


function Signout({navigation}) {
    const ctx = useContext(AuthContext);

  return (
    <View style={styles.main}>
      <Text style={styles.description}>Do you wish to Signout?</Text>
      <View style={styles.button}>
      <Button title="Signout" onPress={ctx.onLogout} color={'darkseagreen'}/>
      </View>
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
  button: {
    paddingRight:0,
    marginTop:10,
    fontWeight:'bold',
  },
});
export default Signout;