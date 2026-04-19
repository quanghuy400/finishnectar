import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = ['Fruits', 'Vegetables', 'Beverages', 'Meat & Fish', 'Cooking Oil & Ghee', 'Bakery & Snacks'];
const brands = ['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'];

export default function Filter({ navigation, route }) {
  const [selectedCats, setSelectedCats] = useState(route.params?.selectedCats || []);
  const [selectedBrands, setSelectedBrands] = useState(route.params?.selectedBrands || []);

  const toggle = (item, list, setList) => {
    if (list.includes(item)) setList(list.filter(i => i !== item));
    else setList([...list, item]);
  };

  const CheckItem = ({ label, checked, onPress }) => (
    <TouchableOpacity style={styles.checkRow} onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checkboxActive]}>
        {checked && <Ionicons name="checkmark" size={14} color="#fff" />}
      </View>
      <Text style={[styles.checkLabel, checked && styles.checkLabelActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Categories</Text>
        {categories.map(item => (
          <CheckItem
            key={item}
            label={item}
            checked={selectedCats.includes(item)}
            onPress={() => toggle(item, selectedCats, setSelectedCats)}
          />
        ))}

        <Text style={[styles.sectionTitle, { marginTop: 25 }]}>Brand</Text>
        {brands.map(item => (
          <CheckItem
            key={item}
            label={item}
            checked={selectedBrands.includes(item)}
            onPress={() => toggle(item, selectedBrands, setSelectedBrands)}
          />
        ))}
      </ScrollView>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // ✅ Trả filter về Search
          navigation.navigate('Search', { selectedCats, selectedBrands });
        }}
      >
        <Text style={styles.buttonText}>Apply Filter</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, marginTop: 50, marginBottom: 20,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  content: { paddingHorizontal: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  checkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  checkbox: {
    width: 24, height: 24, borderRadius: 6,
    borderWidth: 1.5, borderColor: '#ccc',
    justifyContent: 'center', alignItems: 'center', marginRight: 12,
  },
  checkboxActive: { backgroundColor: '#4CAF6A', borderColor: '#4CAF6A' },
  checkLabel: { fontSize: 15, color: '#333' },
  checkLabelActive: { color: '#4CAF6A', fontWeight: '600' },
  button: {
    backgroundColor: '#4CAF6A', margin: 20,
    borderRadius: 30, height: 55,
    justifyContent: 'center', alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});