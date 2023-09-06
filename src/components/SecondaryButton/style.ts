import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: '700',
    style: 'normal',
    subsets: ['latin'],
});

 const StyledButton = styled.button`
    width: 119px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #CBCBCB;
    color: #05020E;
    text-align: center;
    font-family: ${inter};
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: background-color 0.3s, filter 0.3s;

    &:hover {
      background-color: #B7B7B7;
      filter: brightness(90%);
    }
`;
export default StyledButton;