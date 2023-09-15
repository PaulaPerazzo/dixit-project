



import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: '700',
    style: 'normal',
    subsets: ['latin'],
});

export const StyledGradientTitle = styled.h1<{align?: string}>`
    color: #FFFF;
    text-align: ${(props) => props.align ? props.align : 'center'};
    font-family: ${inter};
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;