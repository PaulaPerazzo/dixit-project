import styled from 'styled-components';


export const ImagePlaceholderContainer = styled.div<{width?:string, height?:string}>`
    display: flex;
    justify-content: center;
    width: ${(props)=> props.width ? props.width : '347px'};
    height: ${(props)=> props.height ? props.height : '531px'};;
    margin: auto;
    align-items: center;
    border-radius: 20px;
    border: 1px solid;
    border-style: dashed;
`;

export const ImagePlaceholder = styled.img`
    width: 100px;
    height: 100px;
`
