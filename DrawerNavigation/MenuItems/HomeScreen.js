import * as React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

function HomeScreen({navigation }) {
    return (
      <View style={styles.main}>
        <Text style={styles.description}>Welcome!! This is Home Screen</Text>
      </View>
    );
  }


  export default HomeScreen;
  

  const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'honeydew',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    description:{
      color:'black',
      fontSize:18,
      fontWeight:'600',
    }
  });
  