import React, { useState } from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../consts/colors';

const DetailsScreen = ({ navigation, route }) => {
  const plant = route.params;
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Ionicons name="ios-cart" size={28} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={plant.img} style={{ resizeMode: 'contain', flex: 1 }} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.bestChoice}>
          <View style={styles.line} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best choice</Text>
        </View>
        <View style={styles.productInfo}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{plant.name}</Text>
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>${plant.price}</Text>
          </View>
        </View>
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.aboutText}>{plant.about}</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity style={styles.borderBtn} onPress={handleDecrement}>
              <Text style={styles.borderBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>{count}</Text>
            <TouchableOpacity style={styles.borderBtn} onPress={handleIncrement}>
              <Text style={styles.borderBtnText}>+</Text>
            </TouchableOpacity>
            <View style={styles.buyBtn}>
              <TouchableOpacity onPress={() => console.log('Buy button clicked')}>
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
      },
      bestChoice: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
      },
      line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3,
      },
      productInfo: {
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      priceTag: {
        backgroundColor: COLORS.green,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
      },
      priceText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
      },
      about: {
        paddingHorizontal: 20,
        marginTop: 10,
      },
      aboutTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      aboutText: {
        color: 'grey',
        fontSize: 16,
        lineHeight: 22,
        marginTop: 10,
      },
      counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      },
      borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
      },
      borderBtnText: {
        fontWeight: 'bold',
        fontSize: 28,
      },
      counterText: {
        fontSize: 20,
        marginHorizontal: 10,
        fontWeight: 'bold',
      },
      buyBtn: {
        width: 60,
        height: 40,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 'auto', // Move to the right
      },
      buyText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: COLORS.white,
      },
});

export default DetailsScreen;
