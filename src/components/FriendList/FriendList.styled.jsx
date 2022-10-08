import styled from 'styled-components';

export const Chip = styled.span`
  color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 5px;
  width: 300px;
  box-shadow: ${p => {
    return p.isOnline ? '0px 2px 4px 2px green' : '0px 2px 4px 2px red';
  }};
`;

export const FriendsWrapper = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  margin: 50px 0 100px 0;
  gap: 10px;
  font-size: 24px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
    background-color: #fff;
`;
