import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from 'react-native-web';
import { useNavigation } from '@react-navigation/native'; 

const items = [
  { id: '1', name: 'Item 1', price: '$10.99', image: require('../assets/images/OIF.jpg'), category: 'Category A' },
  { id: '2', name: 'Item 2', price: '$12.99', image: require('../assets/images/OIF.jpg'), category: 'Category B' },
  { id: '3', name: 'Item 3', price: '$8.99', image: require('../assets/images/OIF.jpg'), category: 'Category A' },
  { id: '4', name: 'Item 4', price: '$8.99', image: require('../assets/images/OIF.jpg'), category: 'Category C' },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation(); 
  const navigateToItemDetail = (item) => {
    navigation.navigate('ItemDetail', { item });
  };

  const renderItem = ({ item }) => (
    (selectedCategory === 'All' || selectedCategory === item.category) && (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigateToItemDetail(item)}
      >
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </TouchableOpacity>
    )
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Picker
            selectedValue={selectedCategory}
            style={styles.categoryPicker}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            <Picker.Item label="All Categories" value="All" />
            <Picker.Item label="Category A" value="Category A" />
            <Picker.Item label="Category B" value="Category B" />
            <Picker.Item label="Category C" value="Category C" />
          </Picker>
        </View>
        <View style={styles.headerMiddle}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
        </View>
        <View style={styles.headerRight} >
        
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} > <Image source={require('../assets/images/cart.jpg')} style={styles.cartIcon} /> </TouchableOpacity>
          
          <Text> 10 DNT </Text>
        </View>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.itemContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    color: "black",
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerLeft: {
    flex: 1,
  },
  headerMiddle: {
    flex: 2,
    alignItems: 'center',
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  categoryPicker: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchBar: {
    height: 40,
    width: '80%', // Adjust the width as needed
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 8,
  },
  itemContainer: {
    padding: 16,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 8,
    padding: 8,
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    marginTop: 4,
    fontSize: 14,
    color: '#007AFF',
  },
  cartIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Home;
