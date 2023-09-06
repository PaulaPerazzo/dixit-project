import styled from 'styled-components';


export const StyledHistoryOfStories = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
`

export const Title = styled.h1`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

export const Stories = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Story = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #110F1A;
    fill: #fff;
    color: #fff;

    p {
        font-size: 14px;
    }

    svg {
        width: 35px;
    }
`
