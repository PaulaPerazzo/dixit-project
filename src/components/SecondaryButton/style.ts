import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: '700',
    style: 'normal',
    subsets: ['latin'],
});

export const StyledButton = styled.button`
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
`;
