import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../consts/colors';
import plants from '../consts/plants';

const width = Dimensions.get('window').width / 2 - 30;

function HomeScreen({ navigation }) {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const categories = ['POPULAR', 'Category A', 'Category B', 'Category C'];

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryText,
                categoryIndex === index && styles.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', plant)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'flex-end' }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42, 0.2)'
                  : 'rgba(0, 0, 0, 0.2) ',
              }}>
              <Ionicons
                name="ios-heart"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>

          <View style={{ height: 100, alignItems: 'center' }}>
            <Image source={plant.img} style={{ flex: 1, resizeMode: 'contain' }} />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              ${plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to </Text>
          <Text style={{ fontSize: 38, fontWeight: 'bold', color: COLORS.green }}>
            {' '}
           Online Shoping {' '}
          </Text>
        </View>
        <View style={styles.userIconContainer} >
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}>
         <Ionicons  name="ios-person-circle-outline" size={28} />
       </TouchableOpacity>
        </View>
        
       <Ionicons name="ios-cart" size={28} />
       
        
      </View>
      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Ionicons name="arrow-up" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  categoryTextSelected: {
    color: COLORS.green,
  },
  card: {
    width,
    height: 280,
    backgroundColor: COLORS.light,
    marginVertical: 10,
    borderRadius: 20,
    padding: 15,
    marginRight: 20,
  },
  userIconContainer: {
    marginLeft: -80, 
  },
});

export default HomeScreen;
