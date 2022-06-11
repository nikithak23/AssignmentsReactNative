import React, {Component} from 'react';  
import {Platform, StyleSheet, Text,  
  View,TouchableOpacity,  
} from 'react-native';  
import AsyncStorage from '@react-native-async-storage/async-storage';

const App=()=>{  

  function saveData(){  
    /*let user = "Michal";*/  
    let obj = {  
      name: 'Michal',  
      email: 'michal@gmail.com',  
      city: 'New York',  
    }  
    /*AsyncStorage.setItem('user',user);*/  
    AsyncStorage.setItem('user',JSON.stringify(obj));  
  }  
  const displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('user');  
      let parsed = JSON.parse(user);  
      alert(parsed.name);  
    }  
    catch(error){  
      alert(error)  
    }  
  }  
  
    return (  
      <View style={styles.container}>  
        <TouchableOpacity onPress ={saveData}>  
          <Text>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity>   
      </View>  
    );  
   
}  
export default App;

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#F5FCFF',  
  },  
});  