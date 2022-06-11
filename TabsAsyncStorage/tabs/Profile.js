import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, Button, Switch} from 'react-native';
//import {useContext} from 'react';
//import AuthContext from '../store/auth-context';


function Profile(props) {
  //const ctx = useContext(AuthContext);  // reqd for logout switch
  const [isEnabled, setIsEnabled] = useState(false);
  const [userData, setUserData] = useState(null);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

useEffect(() => {
    const retrieveData = async () => {
      try {
        const userDetails = await AsyncStorage.multiGet([
          'name',
          'email',
          'phone',
        ]);

        if (userDetails !== null) {
          console.log(userDetails);
          setUserData(userDetails);
        }
      } catch (error) {
        console.log('Error retrieving data');
        // Error retrieving data
      }
    };
    retrieveData();
}, []);

  return(
    <View style={styles.main}>
      <View style={styles.textContainer}>
        <Text style={styles.description}>Name: {userData && userData[0][1]}</Text>
        <Text style={styles.description}>Email: {userData && userData[1][1]}</Text>
        <Text style={styles.description}>Phone: {userData && userData[2][1]}</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.description}>Notification:</Text>
            <Switch
              trackColor={{false: 'black', true: 'black'}}
              thumbColor={isEnabled ? 'darkseagreen' : 'darkseagreen'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        </View>
      </View>
    </View>
  );
}
/*
//put this logout btn after notif switch inside the return statement if reqd
<View style={styles.button}>
      <Button title="logout" onPress={ctx.onLogout} color={'darkseagreen'}/>
      </View>
*/



const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
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
  button: {
    paddingRight:180,
    marginTop:40,
    fontWeight:'bold',
    
  },
});

export default Profile;
