import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StorageService } from '../services/storageService';

export default function Account({ navigation }) {
  const handleLogout = async () => {
    await StorageService.logout();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tài khoản</Text>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Orders')}>
        <Ionicons name="receipt-outline" size={22} color="#333" />
        <Text style={styles.itemText}>Đơn hàng của tôi</Text>
        <Ionicons name="chevron-forward" size={18} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.item, styles.logout]} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={22} color="#e74c3c" />
        <Text style={[styles.itemText, { color: '#e74c3c' }]}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60 },
  title: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 30 },
  item: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 18, borderBottomWidth: 1, borderColor: '#eee' },
  itemText: { flex: 1, marginLeft: 15, fontSize: 15 },
  logout: { marginTop: 20 },
});