import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, FlatList, Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import products from '../data';

export default function Cart({ navigation }) {
  const [cart, setCart] = useState([
    { ...products[0], qty: 1 },
    { ...products[3], qty: 1 },
    { ...products[1], qty: 1 },
    { ...products[2], qty: 1 },
  ]);

  const updateQty = (id, delta) => {
    setCart(cart
      .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
      .filter(i => i.qty > 0)
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={item.image} style={styles.img} />

            <View style={styles.info}>
              <TouchableOpacity
                style={styles.remove}
                onPress={() => updateQty(item.id, -item.qty)}
              >
                <Ionicons name="close" size={16} color="#aaa" />
              </TouchableOpacity>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>{item.sub}</Text>

              <View style={styles.qtyRow}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => updateQty(item.id, -1)}
                >
                  <Ionicons name="remove" size={16} color="#333" />
                </TouchableOpacity>
                <Text style={styles.qty}>{item.qty}</Text>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => updateQty(item.id, 1)}
                >
                  <Ionicons name="add" size={16} color="#4CAF6A" />
                </TouchableOpacity>
                <Text style={styles.price}>${(item.price * item.qty).toFixed(2)}</Text>
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to Checkout</Text>
        <Text style={styles.buttonPrice}>${total.toFixed(2)}</Text>
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
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  img: { width: 70, height: 70, resizeMode: 'contain', marginRight: 15 },
  info: { flex: 1 },
  remove: { position: 'absolute', right: 0, top: 0 },
  name: { fontWeight: 'bold', fontSize: 15, marginBottom: 3 },
  sub: { color: '#888', fontSize: 12, marginBottom: 8 },
  qtyRow: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: {
    width: 32, height: 32,
    borderWidth: 1, borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center', alignItems: 'center',
  },
  qty: { marginHorizontal: 12, fontSize: 16 },
  price: { marginLeft: 'auto', fontWeight: 'bold', fontSize: 15 },
  separator: { height: 1, backgroundColor: '#eee' },
  button: {
    backgroundColor: '#4CAF6A',
    margin: 20, borderRadius: 30, height: 55,
    flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  buttonPrice: {
    color: '#fff', fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: 8, paddingVertical: 3,
    borderRadius: 10, marginLeft: 10,
  },
});