import styled from 'styled-components';


export const StyledExportPDF = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    width: fit-content;
    background: rgb(219,81,161);
    background: linear-gradient(90deg, rgba(219,81,161,1) 27%, rgba(117,117,251,1) 100%);
    border-radius: 10px;
    padding: 20px 30px;
    color: white;
    font-weight: bold;
    font-size: 18px;

    svg {
        fill: white;
        width: 17px;
    }
`