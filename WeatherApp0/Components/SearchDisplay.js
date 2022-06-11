import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const SearchDisplay = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        borderBottomColor:'gray',
        borderBottomWidth:1,
      },
      title: {
        marginLeft:20,
        marginVertical:20,
        fontSize: 16,
        color:'black',
      },
})
export default SearchDisplay;

