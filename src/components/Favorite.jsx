import React from 'react';
import NavBar from './NavBar';

const Favorite = ({ favoriteImages }) => {
  return (
    <div>
        <NavBar />
      <h2>Tus Imágenes Favoritas</h2>
      <div className="favorites-gallery">
        {favoriteImages.map((image, index) => (
          <div key={index} className="favorite-image">
            <img src={image.imageUrl} alt={image.altText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
