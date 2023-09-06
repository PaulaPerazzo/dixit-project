
import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: '700',
    style: 'normal',
    subsets: ['latin'],
});

export const StyledButton = styled.button`
    width: 153px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    color: #000;
    text-align: center;
    font-family: ${inter};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;