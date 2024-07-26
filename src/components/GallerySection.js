// src/components/GallerySection.js
import React from 'react';
import LazyLoad from 'react-lazyload';
import image1 from '../assets/path-to-image1.webp';
import image2 from '../assets/path-to-image2.webp';
import image3 from '../assets/path-to-image3.webp';

const GallerySection = () => {
  const images = [image1, image2, image3];

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 animate-slide-in">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <LazyLoad key={index} height={200} offset={100} once>
              <div className="overflow-hidden rounded shadow transform transition hover:scale-105">
                <img src={image} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
              </div>
            </LazyLoad>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
