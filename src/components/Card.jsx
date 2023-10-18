import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ imageUrl, altText }) => {
  return (
    <Card>
      <Card.Img src={imageUrl} alt={altText} />
    </Card>
  );
};

export default CardComponent;


