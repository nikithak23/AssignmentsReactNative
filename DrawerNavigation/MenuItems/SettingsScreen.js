import * as React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

function SettingsScreen({ navigation }) {
    return (
      <View style={style=styles.main}>
        <Text style={styles.description}>This is Settings Screen</Text>
      </View>
    );
  }

  
  export default SettingsScreen;


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
  