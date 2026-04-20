import React, { useState } from 'react';
import {
  View, Text, StyleSheet, FlatList, Image,
  TouchableOpacity, Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import products from '../data';

export default function Favourite({ navigation }) {
  const { addToCart } = useCart();
  const [favourites, setFavourites] = useState([
    products[5], products[4], products[6],
    products[7], products[8], products[9],
  ]);

  const handleDelete = (id) => {
    Alert.alert(
      'Xóa khỏi yêu thích',
      'Bạn có chắc muốn xóa sản phẩm này không?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Xóa', style: 'destructive',
          onPress: () => setFavourites(prev => prev.filter(p => p.id !== id)),
        },
      ]
    );
  };

  const handleAddAll = async () => {
    if (favourites.length === 0) return;
    for (const item of favourites) {
      await addToCart({
        id: item.id,
        name: item.name,
        sub: item.sub,
        price: item.price,
        imageKey: item.imageKey,
        category: item.category,
      });
    }
    Alert.alert('Thành công', 'Đã thêm tất cả vào giỏ hàng!');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Favourite</Text>

      {favourites.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="heart-outline" size={60} color="#ddd" />
          <Text style={styles.emptyText}>Chưa có sản phẩm yêu thích</Text>
        </View>
      ) : (
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

              {/* Xóa */}
              <TouchableOpacity
                onPress={() => handleDelete(item.id)}
                style={styles.deleteBtn}
              >
                <Ionicons name="trash-outline" size={18} color="#e74c3c" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}

      <TouchableOpacity
        style={[styles.button, favourites.length === 0 && styles.buttonDisabled]}
        onPress={handleAddAll}
        disabled={favourites.length === 0}
      >
        <Text style={styles.buttonText}>Add All To Cart</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: {
    textAlign: 'center', fontSize: 20,
    fontWeight: 'bold', marginTop: 55, marginBottom: 20,
  },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#aaa', marginTop: 10, fontSize: 15 },
  row: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 15,
  },
  img: { width: 60, height: 60, resizeMode: 'contain', marginRight: 15 },
  info: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 14 },
  sub: { color: '#888', fontSize: 12, marginTop: 3 },
  price: { fontWeight: 'bold', fontSize: 14, marginRight: 8 },
  deleteBtn: {
    padding: 6, backgroundColor: '#fff0f0', borderRadius: 8,
  },
  separator: { height: 1, backgroundColor: '#eee' },
  button: {
    backgroundColor: '#4CAF6A', margin: 20,
    borderRadius: 30, height: 55,
    justifyContent: 'center', alignItems: 'center',
  },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});