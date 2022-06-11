import React, {useEffect,useState} from 'react';
import {View, Button, Alert, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
    const [data, setData] = useState([])

  const userDetails = {
    name: 'Rashid',
    gender: 'male',
    age: 28,
  };

  useEffect(() => {
    AsyncStorage.setItem('user', JSON.stringify(userDetails))
      .then(() => {
        console.log('data saved');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userDetails]);

  const retrieveData = () => {
    AsyncStorage.getItem('user')
      .then((value) => {
        const user = JSON.parse(value);
        setData(user)
        console.log(data.name)
        Alert.alert(`${user.name} ${user.gender} ${user.age}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Button onPress={retrieveData} title="Show saved Object" />
      <Text>{data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default App;