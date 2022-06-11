import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont().then();




const Header = props => {
  return (
    <View style={styles.header}>

      <TouchableOpacity style={styles.leftpart} onPress={props.onPress1}>
        <Image source={require('../Images/Home/icon_menu_white.png')}></Image>
      </TouchableOpacity>
      <View>
        <Image source={require('../Images/Home/logo.png')} ></Image>
      </View>
      <TouchableOpacity style={styles.rightpart} onPress={props.onPress2}>
        <Image source={require('../Images/Home/icon_search_white.png')}></Image>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  leftpart: {
    flexDirection: 'column',
  },
  rightpart: {
    flexDirection: 'column',
  },
});
export default Header;

