import * as React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

function NotificationsScreen({ navigation }) {
    return (
      <View style={styles.main}>
        <Text style={styles.description}>This is Notifications Screen</Text>
      </View>
    );
  }


  export default NotificationsScreen;
  
  
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
  