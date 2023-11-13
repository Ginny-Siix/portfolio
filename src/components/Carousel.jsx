// Carousel.jsx
import React from 'react';

const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      {/* Contenu du carrousel */}
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Projet ${index + 1}`} />
      ))}
    </div>
  );
};

export default Carousel;
