// src/components/navbar.tsx
import React from 'react';
import { StyledCard, CardImage } from './style';

interface CardProps {
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ imageUrl }) => {
  return (
    <StyledCard>
      <CardImage src={imageUrl} alt="Imagem do card" /> 
    </StyledCard>
  );
};

export default Card;
