import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CartIcon from './CartIcon';

const Header = props => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Pizza Delivery</Text>
      </View>
      <CartIcon openCart={props.onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'saddlebrown',
    marginTop:-5
  },
});
export default Header;
