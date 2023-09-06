import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: '700',
    style: 'normal',
    subsets: ['latin'],
});

 const StyledButton = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border-color: #FFFFFF;
    background-color: #05020E;
    color: #FFFFFF;
    text-align: center;
    font-family: ${inter};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    transition: background-color 0.3s, filter 0.3s;
    &:hover {
      background-color: #B7B7B7;
      filter: brightness(90%);
    }
`;
export default StyledButton;