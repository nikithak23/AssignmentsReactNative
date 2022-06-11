import * as React from 'react';
import { Button, View,Text,StyleSheet,ImageBackground,FlatList,Image} from 'react-native';
import Header from '../Components/HeaderFavRecent';
import {useSelector} from 'react-redux';

function RecentsScreen({ navigation }) {
  const Items = useSelector(state => state.recSearchData.items);
  
  const openSearch = () => {
    navigation.navigate('Recent Search');
    };
  const goHome = () => {
      navigation.goBack()
    };
  const renderItem=({item})=> {
          return(
          <View style={styles.flatlist}>
            <View style={styles.container}>

              <View style={{flexDirection:'column'}}>
                <Text style={styles.line1}>{item.name}, {item.country}</Text>
              <View style={{flexDirection:'row',alignContent:'center'}}>
                <Text style={styles.line2p1}>{item.logo} {item.temp.toFixed(0)}&deg;C</Text>
                <Text style={styles.line2p2}>{(item.desc).charAt(0).toUpperCase() + (item.desc).slice(1)}</Text>
              </View>
              </View>

            <Image style={styles.heart} source={require('../Images/Weather/icon_favourite_active.png')}></Image>
            </View>
          </View>
       
        )
    }


  return (
      <ImageBackground source={require('../Images/Home/background_android.png')} style={styles.backgroundImage}>
      
      <View style={styles.headerContainer}>
        <Header goHome={goHome} onPress2={openSearch} title="Recent Search" />
      </View>
      
      <View style={styles.contentContainer}>
      <View style={styles.topLine}>
        <Text style={styles.leftText}>You recently searched for</Text>
        <Text style={styles.rightText}>Clear all</Text>
        </View>
        <FlatList
        data={Items}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={renderItem}
        />
      </View>
      </ImageBackground>
    );
  }
  export default RecentsScreen;

  const styles = StyleSheet.create({
    backgroundImage:{
      flex:1,
      width:'100%'
    },
    headerContainer: {
      height: 50,
      padding: 10,
      backgroundColor:'white'
    },
    contentContainer:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    topLine:{
      flexDirection:'row',
      marginTop:17,
      marginBottom:15,
      //alignContent:'space-between'
      //justifyContent:'space-between'
    },
    leftText:{
      fontSize:13,
      lineHeight:15,
      textAlign:'left',
      color:'#FFFFFF',
    },
    rightText:{
      fontSize:13,
      lineHeight:15,
      textAlign:'right',
      color:'#FFFFFF',
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
      paddingHorizontal:15,
      paddingVertical:15
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
      color:'#FFFFFF',
      fontWeight:'500',
      fontSize:18,
      lineHeight:21
    },
    line2p2:{
      fontSize:15,
      lineHeight:16,
      color:'#FFFFFF',
      marginLeft:20,
      alignSelf:'center'
    },
    heart:{
      height:17,
      width:18,
      justifyContent:'space-between',
      //marginLeft:160,
    },


  })




  








  /*
  import * as React from 'react';
import { Button, View,Text,StyleSheet,ImageBackground } from 'react-native';
import Header from '../Components/HeaderFavRecent';

function RecentsScreen({ navigation }) {
  const tabTitle="Recent Search";
  
  const openSearch = () => {
    navigation.navigate('Recent Search');
    };
    const goHome = () => {
      navigation.goBack()
      };

    return (
      <ImageBackground source={require('../Images/Home/background_android.png')} style={styles.backgroundImage}>
      
      <View style={styles.headerContainer}>
        <Header goHome={goHome} onPress2={openSearch} title="Recent Search" />
      </View>
      
      <View style={styles.contentContainer}>
        <Text>Recent Search Screen</Text>
      </View>
      </ImageBackground>
    );
  }
  export default RecentsScreen;

  const styles = StyleSheet.create({
    backgroundImage:{
      flex:1,
      width:'100%'
    },
    headerContainer: {
      height: 50,
      padding: 10,
      backgroundColor:'white'
    },
    contentContainer:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
    }


  })




  

*/