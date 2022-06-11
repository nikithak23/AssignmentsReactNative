import React, {useState, useEffect, useContext} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../store/auth-context';


const SplashScreen = ({navigation}) => {
  const [splashScreen, setSplashScreen] = useState(true);

  const hideSplashScreen = () => {
    setSplashScreen(false);
  };
  const ctx = useContext(AuthContext);

  useEffect(() => {
    let interval;
    if (ctx.isLoggedIn === true) {
      console.log(ctx.isLoggedIn);
      interval = setTimeout(() => {
        hideSplashScreen();
        navigation.dispatch(StackActions.replace('TabPage'));
      }, 2500);
    }
    return () => {
      clearTimeout(interval);
    };
}, [ctx.isLoggedIn]); //everytimr the state of isLoggedIn changes, this useEffect runs (checks for the state, if its true this useEffect executes)

  useEffect(() => {
    let interval;
    if (ctx.isLoggedIn === false) {
      interval = setTimeout(() => {
        hideSplashScreen();
        navigation.dispatch(StackActions.replace('SignUpPage'));
      }, 2500);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [ctx.isLoggedIn]); //everytimr the state of isLoggedIn changes, this useEffect runs (checks for the state, if its false this useEffect executes)



  const renderSplash = () => {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://www.nicepng.com/png/detail/334-3341474_sign-up-button-green-sign-up-button-png.png'}}
              style={{width:'100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>
    );
  };
  return <View>{splashScreen && renderSplash()}</View>;
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'honeydew',
    justifyContent: 'center',
    alignItems: 'center',  
  }
});
export default SplashScreen;
