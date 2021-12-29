import React from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';

import AppRouter from './Components/AppRouter/AppRouter';



function App() {
  return (
    
      
    <CartProvider>
      <AppRouter/>
    </CartProvider>
  );
  
}

export default App;
