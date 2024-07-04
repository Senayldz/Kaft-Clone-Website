// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [notification, setNotification] = useState(null);

    const addGiftCardToCart = (item) => {
        setCart(prevCart => [...prevCart, { ...item, type: 'giftCard' }]);
        setNotification('Hediye kartı sepete eklendi');
        setTimeout(() => setNotification(null), 3000);
    };

    const addToCart = (id) => {
        setCart(prevCart => [...prevCart, { id, type: 'product' }]);
        setNotification('Ürün sepete eklendi');
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, notification, addGiftCardToCart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};