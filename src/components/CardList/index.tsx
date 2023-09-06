// src/components/CardList.tsx
import React from 'react';
import Card from '../Card'; // Importe o componente Card
import { StyledCardList, CardImage } from './style';

const dataArray = [
    { id: '1', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '2', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '3', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '4', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '5', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '6', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '7', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '8', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '9', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
];

const CardList: React.FC = () => {
  return (
    <StyledCardList>
      {dataArray.map((card) => (
        <Card key={card.id} imageUrl={card.imageUrl} />
      ))}
    </StyledCardList>
  );
};

export default CardList;
