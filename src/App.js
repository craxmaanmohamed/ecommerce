
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CartProvider from './components/context/CartContext';

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Login setAuth={setAuth} setUser={setUser} setRole={setRole} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={auth && role === 'admin' ? <AdminDashboard /> : <Login setAuth={setAuth} setUser={setUser} setRole={setRole} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
