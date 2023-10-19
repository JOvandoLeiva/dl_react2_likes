
import React, { useContext } from 'react';
import NavBar from './NavBar';
import Card from './Card';
import { UserContext } from './UserContext';


const Favorite = () => {
  const { favoriteImages } = useContext(UserContext); 
  return (
    <div>
      <NavBar />
      <h2>Tus Imágenes Favoritas</h2>
      <div className="row">
        {favoriteImages.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <Card imageUrl={image.imageUrl} altText={image.altText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;

