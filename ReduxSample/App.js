import React from 'react';
import {SafeAreaView,StatusBar,View,StyleSheet,useColorScheme,} from 'react-native';

//import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import HomeScreen from './src/HomeScreen';
import store from './src/redux/store';

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';
  //const backgroundStyle = {
   // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //};

  return (
    <Provider store={store}>
      <View style={{backgroundColor: 'red', flex: 1, marginTop:0}}>
        <HomeScreen />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;