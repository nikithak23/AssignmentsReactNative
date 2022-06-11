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
        //paddingLeft:10,
        //padding:10,
        //marginTop:15,
        //marginHorizontal: 10,
      },
      title: {
        marginLeft:20,
        marginVertical:20,
        fontSize: 16,
        color:'black',
        //fontWeight:'500',
        //padding:10
      },
})
export default SearchDisplay;

