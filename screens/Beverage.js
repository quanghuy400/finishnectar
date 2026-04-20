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
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import products from '../data';

const beverageProducts = products.filter(p => p.category === 'Beverages');

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
        data={beverageProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 15 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <Card item={item} />}
      />

    </View>
  );
}

/* CARD */
const Card = ({ item }) => {
  const { addToCart } = useCart();
  const navigation = useNavigation();

  const handleAdd = async () => {
    await addToCart({
      id: item.id,
      name: item.name,
      sub: item.sub,
      price: item.price,
      imageKey: item.imageKey,
      category: item.category,
    });
    alert('Đã thêm vào giỏ!');
  };

  return (
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
        <TouchableOpacity style={styles.add} onPress={handleAdd}>
          <Ionicons name="add" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    marginTop: 50, paddingHorizontal: 15,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  card: {
    width: '48%', backgroundColor: '#fff',
    borderRadius: 15, padding: 15, marginBottom: 15,
    borderWidth: 1, borderColor: '#eee', elevation: 2,
  },
  img: { width: '100%', height: 90, resizeMode: 'contain', marginBottom: 10 },
  name: { fontWeight: 'bold', fontSize: 14 },
  sub: { color: '#888', fontSize: 12, marginVertical: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  price: { fontWeight: 'bold', fontSize: 14 },
  add: { width: 35, height: 35, backgroundColor: '#4CAF6A', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
});