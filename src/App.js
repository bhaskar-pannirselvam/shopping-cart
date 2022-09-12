import './App.css';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </div>
  );

}

export default App;
