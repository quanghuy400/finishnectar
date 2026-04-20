import React, { createContext, useContext, useState, useEffect } from 'react';
import { StorageService } from '../services/storageService';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    StorageService.getOrders().then(data => {
      setOrders(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  }, []);

  const placeOrder = async (cart, total) => {
    const order = await StorageService.saveOrder(cart, total);
    setOrders(prev => [order, ...prev]);
    return order;
  };

  const deleteOrder = async (orderId) => {
    const newOrders = await StorageService.deleteOrder(orderId);
    setOrders(newOrders);
  };

  return (
    <OrderContext.Provider value={{ orders, loading, placeOrder, deleteOrder }}>
      <>{children}</>
    </OrderContext.Provider>
  );
}

export const useOrders = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrders must be used within OrderProvider');
  return ctx;
};