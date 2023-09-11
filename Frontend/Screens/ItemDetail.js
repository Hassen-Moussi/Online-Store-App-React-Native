import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemDetail = () => {
  const item = {
    id: '1',
    name: 'Item 1',
    price: '$19.99',
    image: require('../assets/images/OIF.jpg'),
    category: 'Category A',
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemCategory}>Category: {item.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemName: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemPrice: {
    marginTop: 8,
    fontSize: 18,
    color: '#007AFF',
  },
  itemCategory: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default ItemDetail;
