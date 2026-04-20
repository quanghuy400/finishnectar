import AsyncStorage from '@react-native-async-storage/async-storage';

const encode = (data) => btoa(unescape(encodeURIComponent(JSON.stringify(data))));

const decode = (raw) => {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(raw))));
  } catch (e) {
    return null;
  }
};

const LOGIN_EXPIRY_DAYS = 7;

export const StorageService = {

  async saveUser(user) {
    try {
      const payload = {
        user,
        expiry: Date.now() + LOGIN_EXPIRY_DAYS * 24 * 60 * 60 * 1000,
      };
      await AsyncStorage.setItem('auth', encode(payload));
    } catch (e) {
      console.error('saveUser error:', e);
    }
  },

  async getUser() {
    try {
      const raw = await AsyncStorage.getItem('auth');
      if (!raw) return null;
      const payload = decode(raw);
      if (!payload) return null;
      if (Date.now() > payload.expiry) {
        await AsyncStorage.removeItem('auth');
        return null;
      }
      return payload.user;
    } catch (e) {
      console.error('getUser error:', e);
      return null;
    }
  },

  async logout() {
    try {
      await AsyncStorage.multiRemove(['auth', 'cart', 'orders']);
    } catch (e) {
      console.error('logout error:', e);
    }
  },

  async saveCart(cart) {
    try {
      await AsyncStorage.setItem('cart', encode(cart));
    } catch (e) {
      console.error('saveCart error:', e);
    }
  },

  async getCart() {
    try {
      const raw = await AsyncStorage.getItem('cart');
      if (!raw) return [];
      const decoded = decode(raw);
      if (!Array.isArray(decoded)) {
        await AsyncStorage.removeItem('cart'); 
        return [];
      }
      return decoded;
    } catch (e) {
      console.error('getCart error:', e);
      return [];
    }
  },

  async saveOrder(cart, total) {
    try {
      const orders = await this.getOrders();
      const newOrder = {
        id: Date.now().toString(),
        items: cart,
        total: total || 0,
        createdAt: new Date().toLocaleString('vi-VN'),
      };
      orders.unshift(newOrder);
      await AsyncStorage.setItem('orders', encode(orders));
      return newOrder;
    } catch (e) {
      console.error('saveOrder error:', e);
    }
  },

  async getOrders() {
    try {
      const raw = await AsyncStorage.getItem('orders');
      if (!raw) return [];
      const decoded = decode(raw);
      if (!Array.isArray(decoded)) {
        await AsyncStorage.removeItem('orders'); 
        return [];
      }
      return decoded;
    } catch (e) {
      console.error('getOrders error:', e);
      return [];
    }
  },

  async deleteOrder(orderId) {
    try {
      const orders = await this.getOrders();
      const newOrders = orders.filter(o => o.id !== orderId);
      await AsyncStorage.setItem('orders', encode(newOrders));
      return newOrders;
    } catch (e) {
      console.error('deleteOrder error:', e);
      return [];
    }
  },
};