import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont().then();

const Header = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.leftpart} onPress={props.goHome}>
      <Image source={require('../Images/FavRecent/icon_back_black.png')}></Image>
     </TouchableOpacity>
      <View>


    <Text style={styles.title}>{props.title}</Text>


   </View>
      <TouchableOpacity onPress={props.onPress2}>
        <Icon name="search" size={25} color="black"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  leftpart: {
    flexDirection: 'column',
  },
});
export default Header;







/*
import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont().then();

const Header = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.leftpart} onPress={props.goHome}>
      <Image source={require('../Images/FavRecent/icon_back_black.png')}></Image>
     </TouchableOpacity>
      <View>


    <Text style={styles.title}>{props.title}</Text>


   </View>
      <TouchableOpacity onPress={props.onPress2}>
        <Icon name="search" size={25} color="black"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  leftpart: {
    flexDirection: 'column',
  },
});
export default Header;




*/