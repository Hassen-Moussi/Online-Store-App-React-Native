import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const CartScreen = () => {
  // Hardcoded cart items for demonstration
  const cartItems = [
    {
      id: '1',
      name: 'Item 1',
      price: '$10.99',
      quantity: 2,
      image: require('../assets/images/OIF.jpg'),
    },
    {
      id: '2',
      name: 'Item 2',
      price: '$12.99',
      quantity: 1,
      image: require('../assets/images/OIF.jpg'),
    },
  ];

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  // Render each item in the cart
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemDetails: {
    marginLeft: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#007AFF',
  },
  itemQuantity: {
    fontSize: 14,
    color: 'gray',
  },
  totalContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default CartScreen;
