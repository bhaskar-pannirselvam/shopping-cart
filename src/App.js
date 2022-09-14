import './App.css';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import { saveState } from './redux/localStorage';

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';




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
