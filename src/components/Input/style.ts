import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
})

export const InputBox = styled.textarea`
    width: 200px;
    height: 160px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #747474;
    background: #110F1A;
    padding: 30px;
    color: #B0B0B0;
    font-family: ${inter};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;