import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SettingsScreen() {
    return (
      <View style={styles.main}>
        <Text style={styles.description}>This is Settings Screen</Text>
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
      fontSize:18,
      fontWeight:'600',
    },
  });

export default SettingsScreen;



/*
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SettingsScreen() {
    return (
      <View style={styles.main}>
        <Text style={styles.description}>This is Settings Screen</Text>
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
      fontSize:18,
      fontWeight:'600',
    },
  });

export default SettingsScreen;
*/