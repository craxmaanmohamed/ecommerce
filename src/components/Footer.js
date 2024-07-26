// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Cafe Library. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-yellow-500">Facebook</a>
        <a href="#" className="hover:text-yellow-500">Twitter</a>
        <a href="#" className="hover:text-yellow-500">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
