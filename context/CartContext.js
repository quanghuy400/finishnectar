import React, { createContext, useContext, useState, useEffect } from 'react';
import { StorageService } from '../services/storageService';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    StorageService.getCart().then(data => {
      setCart(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  }, []);

  const addToCart = async (item) => {
    return new Promise((resolve) => {
      setCart(prevCart => {
        const existing = prevCart.find(i => i.id === item.id);
        let newCart;
        if (existing) {
          newCart = prevCart.map(i =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          );
        } else {
          newCart = [...prevCart, { ...item, qty: 1 }];
        }
        StorageService.saveCart(newCart).then(resolve);
        return newCart;
      });
    });
  };

  const updateQty = async (id, delta) => {
    setCart(prevCart => {
      const newCart = prevCart
        .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter(i => i.qty > 0);
      StorageService.saveCart(newCart);
      return newCart;
    });
  };

  const clearCart = async () => {
    setCart([]);
    await StorageService.saveCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, loading, addToCart, updateQty, clearCart }}>
      <>{children}</>
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};