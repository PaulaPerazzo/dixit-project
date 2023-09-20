import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  justify-content: center;

`;

export const ContainerText = styled.div`
    width: 592px;
    height: 370px;
    flex-shrink: 0;
    
    background: #110F1A;

    padding: 48px;

    text-align: justify;

    margin-bottom: 5%;

`;

export const ContainerImages = styled.div`
    width: 588px;
    height: 103px;
    flex-shrink: 0;

    border-radius: 5px;
    background: #110F1A;

    margin-left: 27%;
    margin-bottom: 16px;

    padding: 8px;

    display: flex;
    // justify-content: space-between;
    justify-content: center;
    flex-direction: row;
    
`;
