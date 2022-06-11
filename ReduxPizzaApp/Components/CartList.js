import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addNewItem, deleteOldItem} from '../redux/actions/CartAction';

const CartList = ({id, name, image, price, quantity}) => {
  const dispatch = useDispatch();
  const dispatchAddItem = (id, name, image, price) =>
    dispatch(addNewItem(id, name, image, price));
  const dispatchDelItem = id => dispatch(deleteOldItem(id));

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.secondPart}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>


   
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatchAddItem(id, name, image, price)}>
        <Text style={styles.add}>+</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatchDelItem(id, name, image, price)}>
        <Text style={styles.add}>-</Text>
      </TouchableOpacity>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal:20,
    borderRadius: 30,
    borderWidth:2,
    borderColor:'burlywood',
    paddingVertical: 7,
    paddingHorizontal:10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius:50,
    marginRight:-25
  },
  secondPart: {
    width: 130,
    justifyContent: 'space-between',
    //alignItems: 'center',
  },
  button: {
    borderRadius:5,
    padding:5,
    margin:0,
    backgroundColor: 'burlywood',
  },
  add: {
    //fontSize: 25,
    color: 'saddlebrown',
    fontWeight:'bold'
  },
  name: {
    fontSize: 18,
    color: 'black',
    fontWeight:'800'
  },
  price: {
    fontSize: 16,
    color: 'saddlebrown',
    fontWeight:'500'
  },
  quantity: {
    fontSize: 18,
    color: 'black',
    fontWeight:'800',
    marginHorizontal:-30
  },
});
export default CartList;
