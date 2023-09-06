import styled from 'styled-components';


export const MainPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const ColumnPage = styled.div<{
    borderLeft?: boolean, 
    boderRight?: boolean, 
    borderTop?: boolean, 
    boderBottom?:boolean, 
    padding?:string
    align?: string
    }>`
        display: flex;
        flex-direction: column;
        justify-content: 'center';
        padding: 5%;
        border-top: ${(props) => props.borderTop ? '0.1px solid white' : 'none'};
        border-left: ${(props) => props.borderLeft ? '0.1px solid white' : 'none'};
        border-right: ${(props) => props.boderRight ? '0.1px solid white' : 'none'};
        border-bottom: ${(props) => props.boderBottom ? '0.1px solid white' : 'none'};
        border-width: 0.1px;
        padding: ${(props) => props.padding ? props.padding : 'auto'};
        text-align: ${(props) => props.align ? props.align : 'center'};
    
`;

export const PrimaryTitle = styled.h1`

    color: #FFFF;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
    padding: 0;
`;

export const Divider = styled.hr`
    border: 0.1px solid white;
    width: 100%;
    margin: 50px 0 20px 0;
    padding: 0;
    border-width: 0.1px;
    
`;

export const GridContainer = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns with equal width */
    grid-template-rows: repeat(3, 1fr);    /* Three rows with equal height */
    column-gap: 0;
    row-gap: 20px;
    margin-bottom:50px;
    justify-items: center;
`;