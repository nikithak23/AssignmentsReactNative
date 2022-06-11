import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {addNewItem} from '../redux/actions/CartAction';

const ListItem = ({id, name, image, price}) => {
  const dispatch = useDispatch();

  const dispatchAddItem = (id, name, image, price) =>
    dispatch(addNewItem(id, name, image, price));

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.secondPart}>
        <Text style={styles.name} numberOfLines={1}>{name}
        </Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      <View style={styles.rightpart}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatchAddItem(id, name, image, price)}>
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal:10,
    borderRadius: 30,
    borderWidth:2,
    borderColor:'burlywood',
    //backgroundColor: 'burlywood',
    marginVertical: 10,
    marginHorizontal:20
  },
  secondPart: {
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  name: {
    fontSize: 17,
    color: 'black',
    fontWeight:'800'
  },
  price: {
    fontSize: 15,
    color: 'saddlebrown',
    fontWeight:'500'
  },
  rightpart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    //borderColor: 'burlywood',
    //borderWidth: 0.5,
    borderRadius: 5,
    padding: 4,
    margin: 3,
    backgroundColor: 'burlywood',
  },
  add: {
    fontSize: 20,
    color: 'white',
    fontWeight:'600'
  },
});
export default ListItem;
