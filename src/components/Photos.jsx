import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { getPhotosFromJapan } from './Api';
import Card from './Card'; 


const CardComponent = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photosData = await getPhotosFromJapan();
        setPhotos(photosData);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener fotos desde Pexels:', error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <Spinner animation="border" role="status" />;
  }

  return (
    <div className="row">
      {photos.map((photo) => (
        <div key={photo.id} className="col-lg-3 col-md-4 col-sm-6">
          <Card imageUrl={photo.src.large2x} altText={photo.photographer} />
        </div>
      ))}
    </div>
  );
};

export default CardComponent;