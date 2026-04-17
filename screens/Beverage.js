import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Beverage({ navigation }) {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>Beverages</Text>

        <Ionicons name="options-outline" size={22} color="#000" />
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 15 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <Card item={item} />}
      />

    </View>
  );
}

/* CARD */
const Card = ({ item }) => (
  <View style={styles.card}>

    
    <Image source={item.image} style={styles.img} />

    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.sub}>{item.sub}</Text>

    <View style={styles.row}>
      <Text style={styles.price}>{item.price}</Text>

      <TouchableOpacity style={styles.add}>
        <Ionicons name="add" size={18} color="#fff" />
      </TouchableOpacity>
    </View>

  </View>
);

/* DATA */
const data = [
  {
    name: 'Diet Coke',
    sub: '355ml, Price',
    price: '$1.99',
    image: require('../assets/dietcoke.png'), // 👈 sửa ảnh
  },
  {
    name: 'Sprite Can',
    sub: '325ml, Price',
    price: '$1.50',
    image: require('../assets/sprite.png'),
  },
  {
    name: 'Apple & Grape Juice',
    sub: '2L, Price',
    price: '$15.99',
    image: require('../assets/applejuice.png'),
  },
  {
    name: 'Orange Juice',
    sub: '2L, Price',
    price: '$15.99',
    image: require('../assets/orangejuice.png'),
  },
  {
    name: 'Coca Cola Can',
    sub: '325ml, Price',
    price: '$4.99',
    image: require('../assets/cocacola.png'),
  },
  {
    name: 'Pepsi Can',
    sub: '330ml, Price',
    price: '$4.99',
    image: require('../assets/pepsi.png'),
  },
];

/* STYLE */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    marginTop: 50,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,

    borderWidth: 1,
    borderColor: '#eee',

    elevation: 2,
  },

  img: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  sub: {
    color: '#888',
    fontSize: 12,
    marginVertical: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  price: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  add: {
    width: 35,
    height: 35,
    backgroundColor: '#4CAF6A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
