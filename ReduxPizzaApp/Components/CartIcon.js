import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Badge} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
Icon.loadFont().then();

const CartIcon = props => {
  const Items = useSelector(state => state.cartData.items);
  const numOfItems = Items.length;
  return (
    <TouchableOpacity style={styles.rightpart} onPress={props.openCart}>
      {numOfItems > 0 && (
        <View style={styles.items}>
          <Badge style={styles.number}>{numOfItems}</Badge>
        </View>
      )}
      <Icon
        name="cart"
        size={40}
        color="saddlebrown"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightpart: {
    flexDirection: 'column',
  },
  items: {
    borderRadius: 10,
    padding:1,
  },
  number: {
    fontSize: 12,
    backgroundColor:'burlywood',
    fontWeight:'bold'
  },
  icon: {
    marginTop: -11,
  },
});
export default CartIcon;
