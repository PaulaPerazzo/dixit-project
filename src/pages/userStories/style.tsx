import styled from 'styled-components';


export const MainContent = styled.main`
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 50px;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
`

export const GeneratedContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
`

export default MainContent;