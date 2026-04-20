import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, ActivityIndicator, Image, Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useOrders } from '../context/OrderContext';
import imageMap from '../utils/imageMap';

export default function Orders({ navigation }) {
  const { orders, loading, deleteOrder } = useOrders();

  const handleDelete = (orderId) => {
    Alert.alert(
      'Xóa đơn hàng',
      'Bạn có chắc muốn xóa đơn này không?',
      [
        { text: 'Hủy', style: 'cancel' },
        { text: 'Xóa', style: 'destructive', onPress: () => deleteOrder(orderId) },
      ]
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4CAF6A" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Đơn hàng của tôi</Text>
        <View style={{ width: 24 }} />
      </View>

      {orders.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="receipt-outline" size={60} color="#ddd" />
          <Text style={styles.emptyText}>Chưa có đơn hàng nào</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {orders.map((order, index) => (
            <View key={`order-${order.id}-${index}`} style={styles.card}>

              {/* ORDER HEADER */}
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.orderId}>Đơn #{order.id?.slice(-6)}</Text>
                  <Text style={styles.orderDate}>{String(order.createdAt ?? '')}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleDelete(order.id)}
                  style={styles.deleteBtn}
                >
                  <Ionicons name="trash-outline" size={18} color="#e74c3c" />
                </TouchableOpacity>
              </View>

              {/* ITEMS */}
              {order.items.map((p, i) => (
                <View key={`${order.id}-${p.id}-${i}`} style={styles.itemRow}>
                  <Image
                    source={imageMap[p.imageKey]}
                    style={styles.itemImg}
                  />
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{p.name}</Text>
                    <Text style={styles.itemSub}>{p.sub}</Text>
                  </View>
                  <View style={styles.itemRight}>
                    <Text style={styles.itemQty}>x{p.qty}</Text>
                    <Text style={styles.itemPrice}>
                      ${((p.price || 0) * (p.qty || 1)).toFixed(2)}
                    </Text>
                  </View>
                </View>
              ))}

              {/* TOTAL */}
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Tổng cộng</Text>
                <Text style={styles.totalPrice}>${(order.total || 0).toFixed(2)}</Text>
              </View>

            </View>
          ))}
        </ScrollView>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', paddingHorizontal: 20,
    marginTop: 50, marginBottom: 10,
    backgroundColor: '#fff', paddingVertical: 15,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#aaa', marginTop: 10, fontSize: 15 },
  card: {
    backgroundColor: '#fff', borderRadius: 15,
    padding: 15, marginBottom: 15, elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 12, paddingBottom: 10,
    borderBottomWidth: 1, borderColor: '#eee',
  },
  orderId: { fontWeight: 'bold', fontSize: 15 },
  orderDate: { color: '#888', fontSize: 12, marginTop: 2 },
  deleteBtn: {
    padding: 6, backgroundColor: '#fff0f0', borderRadius: 8,
  },
  itemRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 8, borderBottomWidth: 1, borderColor: '#f5f5f5',
  },
  itemImg: { width: 50, height: 50, resizeMode: 'contain', marginRight: 12 },
  itemInfo: { flex: 1 },
  itemName: { fontWeight: '600', fontSize: 14 },
  itemSub: { color: '#888', fontSize: 12, marginTop: 2 },
  itemRight: { alignItems: 'flex-end' },
  itemQty: { color: '#888', fontSize: 12 },
  itemPrice: { fontWeight: 'bold', fontSize: 14, marginTop: 2 },
  totalRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    marginTop: 12, paddingTop: 10,
    borderTopWidth: 1, borderColor: '#eee',
  },
  totalLabel: { fontWeight: 'bold', fontSize: 15 },
  totalPrice: { fontWeight: 'bold', fontSize: 15, color: '#4CAF6A' },
});