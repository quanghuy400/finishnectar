import React from 'react';
import {
  View, Text, StyleSheet, TextInput, Image,
  ScrollView, TouchableOpacity, Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import products from '../data';

const { width } = Dimensions.get('window');

// ✅ Lấy từ products có đủ id, price, imageKey
const data1 = products.filter(p => ['2', '4'].includes(p.id)); // Banana, Apple
const data2 = products.filter(p => ['1', '3'].includes(p.id)); // Pepper, Ginger
const groceries = products.filter(p => ['15', '14'].includes(p.id)); // Pulse, Rice
const meatData = products.filter(p => ['11', '12'].includes(p.id)); // Beef, Chicken

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <Image source={require('../assets/Group.png')} style={styles.logo} />
          <View style={styles.locationRow}>
            <Ionicons name="location" size={16} color="#4CAF6A" />
            <Text style={styles.locationText}>Your Location</Text>
          </View>
        </View>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#888" />
          <TextInput
            placeholder="Search Store"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
          <Text style={styles.bannerSub}>Get Up To 40% OFF</Text>
        </View>

        {/* SECTION 1 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Exclusive Offer</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data1.map((item) => (
              <Card key={item.id} item={item} navigation={navigation} />
            ))}
          </ScrollView>
        </View>

        {/* SECTION 2 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Selling</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data2.map((item) => (
              <Card key={item.id} item={item} navigation={navigation} />
            ))}
          </ScrollView>
        </View>

        {/* GROCERIES */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Groceries</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {groceries.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.groceryCard}
                onPress={() => navigation.navigate('ProductDetail', { item })}
              >
                <Image source={item.image} style={styles.groceryImg} />
                <Text style={styles.groceryName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* MEAT */}
        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {meatData.map((item) => (
              <Card key={item.id} item={item} navigation={navigation} />
            ))}
          </ScrollView>
        </View>

      </ScrollView>
    </View>
  );
}

/* CARD */
const Card = ({ item, navigation }) => (
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
      <TouchableOpacity
        style={styles.add}
        onPress={() => navigation.navigate('ProductDetail', { item })}
      >
        <Ionicons name="add" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { alignItems: 'center', marginTop: 50 },
  logo: { width: 40, height: 40 },
  locationRow: { flexDirection: 'row', marginTop: 5 },
  locationText: { marginLeft: 5 },
  searchBox: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#f1f1f1', margin: 20,
    paddingHorizontal: 10, borderRadius: 10, height: 45,
  },
  searchInput: { marginLeft: 10, flex: 1 },
  banner: {
    marginHorizontal: 20, padding: 20,
    borderRadius: 15, backgroundColor: '#E8F5E9',
  },
  bannerTitle: { fontSize: 18, fontWeight: 'bold' },
  bannerSub: { color: '#4CAF6A' },
  section: { marginTop: 20 },
  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingHorizontal: 20, marginBottom: 10,
  },
  sectionTitle: { fontWeight: 'bold', fontSize: 16 },
  seeAll: { color: '#4CAF6A' },
  card: {
    width: width * 0.42, backgroundColor: '#fff',
    padding: 15, borderRadius: 15,
    marginLeft: 20, elevation: 3,
  },
  img: { width: '100%', height: 80, resizeMode: 'contain', marginBottom: 10 },
  name: { fontWeight: 'bold' },
  sub: { color: '#888', fontSize: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' },
  price: { fontWeight: 'bold' },
  add: { width: 30, height: 30, backgroundColor: '#4CAF6A', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  groceryCard: {
    width: width * 0.6, height: 100,
    backgroundColor: '#F5F5F5', borderRadius: 15,
    marginLeft: 20, flexDirection: 'row',
    alignItems: 'center', padding: 15,
  },
  groceryImg: { width: 60, height: 60, resizeMode: 'contain', marginRight: 15 },
  groceryName: { fontWeight: 'bold', fontSize: 16 },
});