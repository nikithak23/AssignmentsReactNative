import React, { Component, useEffect, useState } from 'react';  
import { Platform, StyleSheet, View, Text,Image, TouchableOpacity, Alert } from 'react-native';  

const splash=()=>
{  
  const [isVisible, setState]= useState(true);
  
  Hide_Splash_Screen=()=>{  
     setState({isVisible:false});
  }  
 
  useEffect(()=>{
    setTimeout(
      function()
      {
      Hide_Splash_Screen();
      },3000);
  }) 

  const rend=() =>{
        return (
                Splash_Screen = (  
                     <View style={styles.SplashScreen_RootView}>  
                        <View style={styles.SplashScreen_ChildView}>  
                            <Image source={{uri:'https://cdn.dribbble.com/users/1381187/screenshots/4279559/sign_in.png'}}  
                                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
                        </View>  
                      </View> 
                      )
                );
  }         

return(  
    <View style = { styles.MainContainer }>  
        <Text style={{textAlign: 'center'}}> Splash Screen Example</Text>  
          {  
            isVisible==true? rend() : null  
          }  
      </View>  
      );  
}
              



 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: 'white',  
        flex:1,  
    },  
});  

export default splash;