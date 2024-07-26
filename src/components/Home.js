// src/components/Home.js
import React from 'react';
import heroImage from './Assets/image1.jpg';

const Home = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="text-center text-white animate-fade-in">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Electronics Store</h1>
        <p className="text-xl mb-6">Your one-stop shop for the latest gadgets</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Home;
