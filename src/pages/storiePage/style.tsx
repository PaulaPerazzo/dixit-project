import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  justify-content: center;

`;

export const ContainerText = styled.div`
    width: 792px;
    height: 500px;
    flex-shrink: 0;
    
    background: #110F1A;

    padding: 48px;

    text-align: justify;

    margin-left: auto;
    margin-right: auto;

    margin-bottom: 5%;
    font-size: 14px;

    max-width: 100%;
    // overflow: auto; 

`;

export const ContainerImages = styled.div`
    width: 588px;
    height: 133px;
    flex-shrink: 0;

    border-radius: 5px;
    background: #110F1A;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;

    padding: 8px;

    display: flex;
    // justify-content: space-between;
    justify-content: center;
    flex-direction: row;
    
`;

export default Container;