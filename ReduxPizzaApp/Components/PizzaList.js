import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Items} from '../data';
import ListItem from './ListItem';

const PizzaList = () => {
  const renderList = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={Items}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ListItem {...item} />}
          contentContainerStyle={{flexGrow: 1}}
        />
      </View>
    );
  };

  return <View style={{flex: 1}}>{renderList()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});
export default PizzaList;
