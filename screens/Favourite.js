import React from 'react';
import {
  View, Text, StyleSheet, FlatList, Image, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import products from '../data';

const favourites = [
  products[5], products[4], products[6], products[7], products[8], products[9],
];

export default function Favourite({ navigation }) {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.title}>Favourite</Text>

      <FlatList
        data={favourites}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() => navigation.navigate('ProductDetail', { item })}
            activeOpacity={0.8}
          >
            <Image source={item.image} style={styles.img} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>{item.sub}</Text>
            </View>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add All To Cart</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 55,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  img: { width: 60, height: 60, resizeMode: 'contain', marginRight: 15 },
  info: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 14 },
  sub: { color: '#888', fontSize: 12, marginTop: 3 },
  price: { fontWeight: 'bold', fontSize: 14, marginRight: 8 },
  separator: { height: 1, backgroundColor: '#eee' },
  button: {
    backgroundColor: '#4CAF6A',
    margin: 20, borderRadius: 30, height: 55,
    justifyContent: 'center', alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});