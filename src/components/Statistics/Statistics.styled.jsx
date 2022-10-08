import styled from 'styled-components';

export const StatsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  box-shadow: 0px 2px 4px 2px #aaaaaa50;
  margin: 50px 0 50px 0;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 50px;
  padding: 15px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${p => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
  color: #fff;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 25px;
`;

export const Title = styled.h2`
  padding: 30px;
`;
