import React, {useState, useEffect, useContext} from 'react';
import {Text, Image, View, StyleSheet,ImageBackground} from 'react-native';
import {StackActions} from '@react-navigation/native';

const SplashScreen = ({navigation,route}) => {
 
  const [splashScreen, setSplashScreen] = useState(true);

  const hideSplashScreen = () => {
    setSplashScreen(false);
  };
 

  useEffect(() => {
    let interval
      interval = setTimeout(() => {
        hideSplashScreen();
        navigation.dispatch(StackActions.replace('Drawer'));
      }, 2500);
  
    return () => {
      clearTimeout(interval);
    };
}); 


  const renderSplash = () => {
    return (
    <ImageBackground source={require('../Images/Splash/background_android.png')}>
    <View style={styles.container}>
        <Image source={require('../Images/Splash/logo_splash.png')}
              style={{width:'50%', height: '100%', resizeMode: 'contain'}}
        />
      </View>
      </ImageBackground>
    );
  };
  return <View>{splashScreen && renderSplash()}</View>;
};



const styles = StyleSheet.create({
      container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',  
      }
  })
export default SplashScreen;





