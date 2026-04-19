import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput,
  FlatList, Image, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import products from '../data';

export default function Search({ navigation, route }) {
  const [query, setQuery] = useState('');

  // ✅ Nhận filter từ Filter.js
  const selectedCats = route.params?.selectedCats || [];
  const selectedBrands = route.params?.selectedBrands || [];

  const filtered = products.filter(item => {
    const matchName = item.name.toLowerCase().includes(query.toLowerCase());
    const matchCat = selectedCats.length === 0 || selectedCats.includes(item.category);
    const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
    return matchName && matchCat && matchBrand;
  });

  return (
    <View style={styles.container}>

      {/* SEARCH BOX */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#888" />
        <TextInput
          placeholder="Search Store"
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={18} color="#888" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate('Filter', {
            selectedCats,
            selectedBrands,
          })}
          style={{ marginLeft: 8 }}
        >
          <Ionicons
            name="options-outline"
            size={22}
            color={selectedCats.length > 0 || selectedBrands.length > 0 ? '#4CAF6A' : '#333'}
          />
        </TouchableOpacity>
      </View>

      {/* KẾT QUẢ */}
      {query.length === 0 && selectedCats.length === 0 && selectedBrands.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="search" size={60} color="#ddd" />
          <Text style={styles.emptyText}>Tìm kiếm sản phẩm</Text>
        </View>
      ) : filtered.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="sad-outline" size={60} color="#ddd" />
          <Text style={styles.emptyText}>Không tìm thấy kết quả</Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 15 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('ProductDetail', { item })}
              activeOpacity={0.8}
            >
              <Image source={item.image} style={styles.img} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>{item.sub}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                <TouchableOpacity style={styles.add}>
                  <Ionicons name="add" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60 },
  searchBox: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#f1f1f1',
    marginHorizontal: 20, paddingHorizontal: 10,
    borderRadius: 10, height: 45, marginBottom: 10,
  },
  searchInput: { marginLeft: 10, flex: 1, fontSize: 15 },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#aaa', marginTop: 10, fontSize: 15 },
  card: {
    width: '48%', backgroundColor: '#fff',
    borderRadius: 15, padding: 15, marginBottom: 15,
    borderWidth: 1, borderColor: '#eee', elevation: 2,
  },
  img: { width: '100%', height: 90, resizeMode: 'contain', marginBottom: 10 },
  name: { fontWeight: 'bold', fontSize: 13 },
  sub: { color: '#888', fontSize: 11, marginVertical: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  price: { fontWeight: 'bold', fontSize: 14 },
  add: { width: 30, height: 30, backgroundColor: '#4CAF6A', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
});