import React, {useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';

import MainTabNavigator from '../navigation/TabNavigator';
import {useContext} from 'react';
import AuthContext from '../store/auth-context';


const tabScreen = ({navigation, route}) => {
  //console.log(props);
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <MainTabNavigator
      name={route.params?.name}
      email={route.params?.email}
      phone={route.params?.phone}
    />
  );
};

export default tabScreen;
