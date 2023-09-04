
import React from 'react';
import Card from '../Card'; // Importe o componente Card
import { StyledShortCardList } from './style';

const dataArray = [
    { id: '1', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '2', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '3', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '4', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '5', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
    { id: '6', imageUrl: 'https://th.bing.com/th/id/OIP.bTdOACNB4KBJG8Scm6hS6wHaLE?pid=ImgDet&rs=1' },
   
];

const ShortCardList: React.FC = () => {
  return (
    <StyledShortCardList>
      {dataArray.map((card) => (
        <Card key={card.id} imageUrl={card.imageUrl} />
      ))}
    </StyledShortCardList>
  );
};

export default ShortCardList;
