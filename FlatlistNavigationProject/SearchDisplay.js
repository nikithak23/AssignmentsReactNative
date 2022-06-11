import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const SearchDisplay = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.img}} style={styles.itemImg}/>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        borderColor:'mediumvioletred',
        borderWidth:1,
        borderRadius:15,
        backgroundColor: '#eddfdf',
        paddingLeft:10,
        padding:10,
        marginTop:15,
        marginHorizontal: 10,
      },
      title: {
        marginLeft: 20,
        fontSize: 20,
        color:'mediumvioletred',
        fontWeight:'bold',
        paddingTop:20
      },
      itemImg: {
           width:70,
           height:70,
      },
})
export default SearchDisplay;