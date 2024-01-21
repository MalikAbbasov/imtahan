import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WishlistProvider from './context/WishlistContext/WishlistContext';
import BasketProvider from './context/BasketContext/BasketProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </WishlistProvider>
  </React.StrictMode>
);

