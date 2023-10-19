import React, { useState, useContext, useEffect } from 'react'; 
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from './UserContext'; 

const CardComponent = ({ imageUrl, altText }) => {
  const { favoriteImages, addToFavorites, removeFromFavorites } = useContext(UserContext);

  const isFavoriteInitially = favoriteImages.some((image) => image.imageUrl === imageUrl);
  const [isFavorite, setIsFavorite] = useState(isFavoriteInitially);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      removeFromFavorites({ imageUrl, altText });
    } else {
      addToFavorites({ imageUrl, altText });
    }
  };


  useEffect(() => {
    setIsFavorite(favoriteImages.some((image) => image.imageUrl === imageUrl));
  }, [favoriteImages, imageUrl]);

  return (
    <Card className="my-card">
      <Card.Img src={imageUrl} alt={altText} />
      <Card.Body>
        <Button
          variant="light"
          onClick={toggleFavorite}
          className="favorite-button"
        >
          <FontAwesomeIcon
            icon={isFavorite ? solidHeart : regularHeart}
            className={`heart-icon ${isFavorite ? 'favorite' : ''}`}
          />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
