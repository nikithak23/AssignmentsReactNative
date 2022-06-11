import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomSidebarMenu = (props) => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ backgroundColor:'honeydew'}}>
      <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AWj8-bjjwVY-fuIvtWD4tHNotVkjwljQlzAmGsSyaB9N7PFbas0ksmUo68ZiwfYaZi8&usqp=CAU'}}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={styles.description}>Hello Nikitha!</Text>
      </View>
    
      <DrawerContentScrollView {...props} style={styles.drawercontain}>
      <DrawerItem
            label="Home"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <Ionicons name="home" size={18} color='black' />}></DrawerItem>
            <DrawerItem
            label="Profile"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('Profile')}
            icon={() => <Ionicons name="person-circle" size={18} color='black' />}></DrawerItem>
            <DrawerItem
            label="Notifications"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('Notifications')}
            icon={() => <Ionicons name="notifications" size={18} color='black' />}></DrawerItem>
            <DrawerItem
            label="Settings"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('Settings')}
            icon={() => <Ionicons name="settings" size={18} color='black' />}></DrawerItem>
            <DrawerItem
            label="FAQ"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('FAQ')}
            icon={() => <Ionicons name="search-circle" size={18} color='black' />}></DrawerItem>
            <DrawerItem
            label="Signout"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('Signout')}
            icon={() => <Ionicons name="log-out" size={18} color='black' />}></DrawerItem>
      </DrawerContentScrollView>
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawercontain:{
    flex:1,
    backgroundColor:'honeydew'
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 280,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop:15
  },
  description:{
    color:'black',
    fontSize:20,
    fontWeight:'600',
    alignSelf: 'center',
    marginBottom: 20,
  }
});

export default CustomSidebarMenu;

/*
import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomSidebarMenu = (props) => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ backgroundColor:'skyblue'}}>
      <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHmhaP-lFZfelghooOkmlypnz_bzLpmQ1RA6vKLj4bT9Wdj5L5e1Yw14Nf9kuMzLj-M8&usqp=CAU'}}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={styles.description}>Hello Nikitha!</Text>
      </View>
      <DrawerContentScrollView {...props}>
      <DrawerItem
            label="Home"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <Ionicons name="home" size={18} color='black' />}></DrawerItem>
            <DrawerItem
            label="Notifications"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('Notifications')}
            icon={() => <Ionicons name="notifications" size={18} color='black' />}></DrawerItem>
            <DrawerItem
            label="Settings"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('Settings')}
            icon={() => <Ionicons name="settings" size={18} color='black' />}></DrawerItem>
            <DrawerItem
            label="FAQ"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('FAQ')}
            icon={() => <Ionicons name="search-circle" size={18} color='black' />}></DrawerItem>
            <DrawerItem
            label="Signout"
            labelStyle={{color: 'black'}}
            onPress={() => props.navigation.navigate('Signout')}
            icon={() => <Ionicons name="log-out" size={18} color='black' />}></DrawerItem>

      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 280,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center'
  },
  description:{
    color:'black',
    fontSize:20,
    fontWeight:'600',
    alignSelf: 'center',
    marginVertical: 10
  }
});

export default CustomSidebarMenu;

*/