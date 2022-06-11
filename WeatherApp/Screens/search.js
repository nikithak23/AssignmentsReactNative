import React, {useEffect, useState} from 'react';
import {Text,View, StyleSheet,Image,Button,ScrollView,TextInput,FlatList,TouchableOpacity,} from 'react-native';


const SearchPage = ({navigation}) => {
    const [enteredText, setEnteredText] = useState ('');
    const goHome = () => {
        navigation.navigate('Home');
        };
     search = () => {
        navigation.navigate('Home',{searchCity:enteredText});
        };
    
return (
    <View style={{backgroundColor:'white',flex:1}}>
        <View style={styles.container}>
        <TouchableOpacity onPress={goHome} >
           <Image source={require('../Images/FavRecent/icon_back_black.png')} style={styles.ImageStyle}></Image>
        </TouchableOpacity>
        <TextInput
            onChangeText={value => setEnteredText(value)} 
            //value={enteredText}
            style={styles.input} 
            placeholder="Search for city"  
        />
        <TouchableOpacity onPress={()=>search()} >
           <Text style={styles.TextStyle}>Search</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
}

export default SearchPage;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        height: 42,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
        marginTop:10,
    },
    input: {
        flex:1,
        color:'black',
        fontSize:15,
        paddingHorizontal:15,
    },
    ImageStyle: {
        marginHorizontal: 15,
        alignItems: 'center',
    },
    TextStyle: {
        marginHorizontal: 15,
        alignItems: 'center',
        color:'black',
        fontSize:18,
        fontWeight:'500'
    },
    message: {
      fontSize: 18,
      color:'black',
      fontWeight:'bold',
      textAlign: 'center',
      marginTop:20
    },
     
  });





  /*
  import React, {useEffect, useState} from 'react';
import {Text,View, StyleSheet,Image,Button,ScrollView,TextInput,FlatList,TouchableOpacity,} from 'react-native';


const SearchPage = ({navigation}) => {
    const [enteredText, setEnteredText] = useState ('');
    const goHome = () => {
        navigation.navigate('Home');
        };
     search = () => {
        navigation.navigate('Home',{searchCity:enteredText});
        };
    
return (
    <View style={{backgroundColor:'white',flex:1}}>
        <View style={styles.container}>
        <TouchableOpacity onPress={goHome} >
           <Image source={require('../Images/FavRecent/icon_back_black.png')} style={styles.ImageStyle}></Image>
        </TouchableOpacity>
        <TextInput
            onChangeText={value => setEnteredText(value)} 
            //value={enteredText}
            style={styles.input} 
            placeholder="Search for city"  
        />
        <TouchableOpacity onPress={()=>search()} >
           <Text style={styles.TextStyle}>Search</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
}

export default SearchPage;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        height: 42,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
        marginTop:10,
    },
    input: {
        flex:1,
        color:'black',
        fontSize:15,
        paddingHorizontal:15,
    },
    ImageStyle: {
        marginHorizontal: 15,
        alignItems: 'center',
    },
    TextStyle: {
        marginHorizontal: 15,
        alignItems: 'center',
        color:'black',
        fontSize:18,
        fontWeight:'500'
    },
    message: {
      fontSize: 18,
      color:'black',
      fontWeight:'bold',
      textAlign: 'center',
      marginTop:20
    },
     
  });


*/