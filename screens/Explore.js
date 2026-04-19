import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Explore({ navigation }) {
  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Find Products</Text>

      {/* SEARCH */}
      <TouchableOpacity
        style={styles.searchBox}
        onPress={() => navigation.navigate('Search')}
        activeOpacity={0.8}
      >
        <Ionicons name="search" size={18} color="#888" />
        <Text style={{ marginLeft: 10, color: '#999', fontSize: 15 }}>
          Search Store
        </Text>
      </TouchableOpacity>

      {/* GRID */}
      <View style={styles.grid}>

        <Category
          title="Fresh Fruits & Vegetables"
          image={require('../assets/fruits.png')}
          color="#E8F5E9"
          borderColor="#A5D6A7"
        />

        <Category
          title="Cooking Oil & Ghee"
          image={require('../assets/oil.png')}
          color="#FFF3E0"
          borderColor="#FFCC80"
        />

        <Category
          title="Meat & Fish"
          image={require('../assets/meat.png')}
          color="#FCE4EC"
          borderColor="#F8BBD0"
        />

        <Category
          title="Bakery & Snacks"
          image={require('../assets/bakery.png')}
          color="#E3F2FD"
          borderColor="#90CAF9"
        />

        <Category
          title="Dairy & Eggs"
          image={require('../assets/dairy.png')}
          color="#F3E5F5"
          borderColor="#CE93D8"
        />

        <Category
          title="Beverages"
          image={require('../assets/beverage.png')}
          color="#E0F2F1"
          borderColor="#80CBC4"
          onPress={() => navigation.navigate('Beverage')}
        />

      </View>

    </View>
  );
}

/* CATEGORY */
const Category = ({ title, image, color, borderColor, onPress }) => (
  <TouchableOpacity
    style={[
      styles.card,
      { backgroundColor: color, borderColor: borderColor }
    ]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Image source={image} style={styles.img} />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

/* STYLE */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 45,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    width: '48%',
    height: 150,
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13,
    paddingHorizontal: 5,
  },
});