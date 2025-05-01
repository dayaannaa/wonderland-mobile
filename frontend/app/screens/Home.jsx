import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import CategoryButton from '../components/layout/CategoryButton';

const categories = ['All', 'Sensory', 'Social', 'Communication', 'Routines', 'Emotional'];

const products = [
  {
    id: '1',
    name: 'Red T-shirt',
    price: '$19.99',
  },
  {
    id: '2',
    name: 'Sneakers',
    price: '$49.99',
  },
  {
    id: '3',
    name: 'Smart Watch',
    price: '$99.99',
  },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={styles.title}>Wonderland</Text>
        <Text style={styles.subtitle}>Find your style today</Text>
      </View> */}

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((cat, index) => (
          <CategoryButton
            key={index}
            categoryName={cat}
            // onPress={() => )} 
          />
        ))}
      </ScrollView>
{/* 
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Product', { product: item })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: 50,
    },
    header: {
      marginBottom: 10,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fcf230',
    },
    subtitle: {
      color: '#777',
    },
    search: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 10,
      marginVertical: 10,
    },
    categoryScroll: {
      marginVertical: 10,
    },
    categoryBtn: {
      backgroundColor: '#e6e6e6',
      borderRadius: 20,
      paddingVertical: 6,
      paddingHorizontal: 14,
      marginRight: 10,
      maxHeight: 30,
    },
    categoryText: {
      fontSize: 14,
    },
    productList: {
      paddingVertical: 10,
    },
    card: {
      backgroundColor: '#f9f9f9',
      flex: 1,
      margin: 8,
      borderRadius: 10,
      alignItems: 'center',
      padding: 10,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 10,
    },
    productName: {
      fontWeight: 'bold',
    },
    productPrice: {
      color: '#555',
    },
  });
  
