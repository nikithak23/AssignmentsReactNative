import React,{ useEffect, useState } from 'react';
import { Button, View,Text,StyleSheet,ImageBackground, Image, TouchableOpacity,FlatList,} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../Components/HeaderFavRecent';
import {useDispatch} from 'react-redux';
import {deleteFromFav,deleteAllFav} from '../redux/actions/favAction';



function FavouritesScreen({ navigation }) {
  const Items = useSelector(state => state.favData.items);

  const dispatch = useDispatch();
  const dispatchDeleteFav = Items=>{
    dispatch(deleteFromFav(Items));
  };
  const dispatchDeleteAll = Items=>{
    dispatch(deleteAllFav(Items));
  };

  const openSearch = () => {
    //navigation.navigate('Recent Search');
    navigation.navigate('SearchPage');
    };
    const goHome = () => {
      navigation.goBack()
      };
    const renderEmptyPage = () => {
        return (
          <View style={styles.emptyContainer}>
            <Image style={styles.emptyImage} source={require('../Images/FavRecent/icon_nothing.png')}></Image>
            <Text style={styles.emptyText}>No Favourites added</Text>
          </View>
        );
    };

    const renderItem=({item})=> {
        return(
          
          <View style={styles.flatlist}>
            <View style={styles.container}>
              <View style={{flexDirection:'column'}}>
                <Text style={styles.line1}>{item.name}, {item.country}</Text>
                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
                <Image style={styles.logo} source={{ uri: `http://openweathermap.org/img/w/${item.logo}.png`}}></Image>
                <Text style={styles.line2p1}> {item.temp.toFixed(0)}&deg;C</Text>
                <Text style={styles.line2p2}>{(item.desc).charAt(0).toUpperCase() + (item.desc).slice(1)}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => dispatchDeleteFav(item)}>
            <Image style={styles.heart} source={require('../Images/Weather/icon_favourite_active.png')}></Image>
            </TouchableOpacity>
            </View>
          </View>
          
        )
    }


  return (
      <ImageBackground source={require('../Images/Home/background_android.png')} style={styles.backgroundImage}>

      <View style={styles.headerContainer}>
        <Header goHome={goHome} onPress2={openSearch} title="Favourite" />
      </View>


      {Items.length>0?(
      <View style={styles.contentContainer}>
        <View style={styles.topLine}>
        <Text style={styles.leftText}>{Items.length} City added as favourite</Text>
        <TouchableOpacity onPress={() => dispatchDeleteAll(Items)}>
        <Text style={styles.rightText}>Remove all</Text>
        </TouchableOpacity>
        </View>
        <FlatList
        data={Items}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={renderItem}
        />
      </View>
      ):(
        <View>{renderEmptyPage()}</View>
      )}


      </ImageBackground>
    );
  }
  export default FavouritesScreen;






  const styles = StyleSheet.create({
    backgroundImage:{
      flex:1,
      width:'100%',
    },
    headerContainer: {
      height: 50,
      padding: 10,
      backgroundColor:'white',
    },
    contentContainer:{
      flex: 1, 
      marginHorizontal:20,
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    topLine:{
      flexDirection:'row',
      marginTop:17,
      marginBottom:15,
      //alignItems:'center',
      //justifyContent:'space-between',
    },
    leftText:{
      fontSize:13,
      lineHeight:15,
      textAlign:'left',
      color:'#FFFFFF',
      width:175
      
    },
    rightText:{
      fontSize:13,
      lineHeight:15,
      textAlign:'right',
      color:'#FFFFFF',
      width:175
      
    },
    flatlist:{
      backgroundColor:'rgba(256,256,256,0.1)',
      marginBottom:1,
      width:360,
      height:80
    },
    container:{
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:20,
      paddingVertical:15,
      justifyContent:'space-between'
    },
    line1:{
      fontSize:15,
      lineHeight:18,
      textAlign:'left',
      color:'#FFE539',
      fontWeight:'500',
      marginBottom:10
    },
    line2p1:{
      fontWeight:'500',
      fontSize:18,
      lineHeight:21,
      color:'#FFFFFF',
      marginLeft:10,
      //alignSelf:'center'
    },
    line2p2:{
      fontSize:15,
      lineHeight:21,
      color:'#FFFFFF',
      marginLeft:20,
      //alignSelf:'center'
    },
    logo:{
      height:40,
      width:30,
      marginTop:-9
    },
    heart:{
      height:17,
      width:18,
    },
    emptyContainer:{
      paddingVertical:250,
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    emptyText:{
      color:'#FFFFFF',
      fontSize:18,
      lineHeight:21,
      marginTop:10
    },
    emptyImage:{
      height:84,
      width:159,
    }
  })






