import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Image, ActivityIndicator, Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import imageMap from '../utils/imageMap';

export default function Cart({ navigation }) {
  const { cart, loading, updateQty, clearCart } = useCart();
  const { placeOrder } = useOrders();

  const total = cart.reduce((sum, i) => sum + ((i.price || 0) * (i.qty || 1)), 0);

  const handleRemove = (item) => {
  Alert.alert(
    'Xóa sản phẩm',
    `Bạn có chắc muốn xóa "${item.name}" khỏi giỏ hàng không?`,
    [
      { text: 'Hủy', style: 'cancel' },
      {
        text: 'Xóa', style: 'destructive',
        onPress: () => updateQty(item.id, item.qty * -1),
      },
    ]
  );
};

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    await placeOrder(cart, total);
    await clearCart();
    navigation.navigate('Orders');
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

      <Text style={styles.title}>My Cart</Text>

      {cart.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="cart-outline" size={60} color="#ddd" />
          <Text style={styles.emptyText}>Giỏ hàng trống</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {cart.map((item) => (
            <View key={item.id}>
              <View style={styles.row}>

                <Image
                  source={imageMap[item.imageKey]}
                  style={styles.img}
                />

                <View style={styles.info}>
                  {/* Nút xóa có Alert */}
                  <TouchableOpacity
                    style={styles.remove}
                    onPress={() => handleRemove(item)}
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

                    <Text style={styles.price}>
                      ${(item.price * item.qty).toFixed(2)}
                    </Text>
                  </View>
                </View>

              </View>
              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
      )}

      <TouchableOpacity
        style={[styles.button, cart.length === 0 && styles.buttonDisabled]}
        onPress={handleCheckout}
        disabled={cart.length === 0}
      >
        <Text style={styles.buttonText}>Go to Checkout</Text>
        <Text style={styles.buttonPrice}>${total.toFixed(2)}</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: {
    textAlign: 'center', fontSize: 20,
    fontWeight: 'bold', marginTop: 55, marginBottom: 10,
  },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#aaa', marginTop: 10, fontSize: 15 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  img: { width: 70, height: 70, resizeMode: 'contain', marginRight: 15 },
  info: { flex: 1 },
  remove: { position: 'absolute', right: 0, top: 0 },
  name: { fontWeight: 'bold', fontSize: 15, marginBottom: 3 },
  sub: { color: '#888', fontSize: 12, marginBottom: 8 },
  qtyRow: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: {
    width: 32, height: 32,
    borderWidth: 1, borderColor: '#ddd',
    borderRadius: 8, justifyContent: 'center', alignItems: 'center',
  },
  qty: { marginHorizontal: 12, fontSize: 16 },
  price: { marginLeft: 'auto', fontWeight: 'bold', fontSize: 15 },
  separator: { height: 1, backgroundColor: '#eee' },
  button: {
    backgroundColor: '#4CAF6A', margin: 20,
    borderRadius: 30, height: 55,
    flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center',
  },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  buttonPrice: {
    color: '#fff', fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: 8, paddingVertical: 3,
    borderRadius: 10, marginLeft: 10,
  },
});