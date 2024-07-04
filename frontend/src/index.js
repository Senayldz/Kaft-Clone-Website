import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from '../src/context/AuthContext';
import { CartProvider } from '../src/context/CartContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <App />

      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);
