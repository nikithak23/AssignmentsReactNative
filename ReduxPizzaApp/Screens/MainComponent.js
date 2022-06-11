import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Components/Header';
import PizzaList from '../Components/PizzaList';

const MainComponent = ({navigation}) => {
  const openCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Header onPress={openCart} />
      </View>
      <PizzaList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor:'blanchedalmond'
  },
  container: {
    height: 100,
    //backgroundColor: 'darkmagenta',
    padding: 20,
    marginHorizontal: 10,
    marginTop:10,
    borderRadius: 20,
  },
});
export default MainComponent;
