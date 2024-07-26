// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">Electronics Store</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-400">Products</Link></li>
          {/* <li><Link to="/gallery" className="hover:text-gray-400">Equipment </Link></li> */}
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
