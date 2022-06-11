import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import CartList from '../Components/CartList';
Icon.loadFont().then();

const CartComponent = () => {
  const Items = useSelector(state => state.cartData.items);
  const TotalAmount = useSelector(state => state.cartData.totalAmount);

  const renderFootComponent = () => {
    if (Items.length !== 0) {
      return (
        <View style={styles.totalAmount}>
          <View style={styles.firstpart}>
            <Text style={styles.text}>Total Amount : </Text>
            <Text style={styles.number}>$ {TotalAmount}</Text>
          </View>
          <View style={styles.secondpart}>
            <Text style={styles.pay}>Place Order</Text>
          </View>
        </View>
      );
    }
  };
  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyCart}>
        <Text style={styles.emptyText}>Cart is Empty  :'(</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Items.length > 0 ? (
        <View style={{flex: 1}}>
          <FlatList
            data={Items}
            keyExtractor={(item, index) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <CartList {...item} />}
          />
          <View style={styles.list}>{renderFootComponent()}</View>
        </View>
      ) : (
        <View>{renderEmptyCart()}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
  },
  totalAmount: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding:0,
    marginHorizontal:10,
    
  },
  text: {
    fontSize: 25,
    color: 'saddlebrown',
    fontWeight:'700'
  },
  number: {
    fontSize: 25,
    color: 'saddlebrown',
    fontWeight:'700'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  emptyCart: {
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical:260,
  },
  emptyText: {
    padding: 20,
    textAlign: 'center',
    fontSize: 25,
    color: 'saddlebrown',
    fontWeight:'800'
  },

  list: {
    //borderTopLeftRadius: 40,
    //borderTopRightRadius: 40,
    backgroundColor: 'blanchedalmond',
    //borderColor:'burlywood',
    //borderWidth:2,
    marginHorizontal:20,
    marginVertical:20
  },
  firstpart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom:5
  },
  secondpart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'burlywood',
    marginBottom:10,
    paddingHorizontal:30,
    paddingVertical:5,
    borderRadius:20
  },
  pay: {
    fontSize: 25,
    color: 'white',
    fontWeight:'400'
  },
});
export default CartComponent;
