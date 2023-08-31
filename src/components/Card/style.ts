import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export const StyledCard = styled.figure`
  display: flex;
  padding-top: 1%;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;
