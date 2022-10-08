import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  box-shadow: 0px 2px 4px 2px #aaaaaa50;
  margin-bottom: 50px;
    background-color: #fff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Info = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaa;
  margin-bottom: 10px;

  :nth-of-type(1) {
    font-size: 25px;
    color: #000;
    margin-top: 20px;
  }
`;

export const ProfileList = styled.ul`
  display: flex;
  border-top: 1px solid #aaaaaa30;
`;

export const ProfileListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 20px 0 20px 0;
  gap: 8px;
  background-color: #63698310;

  :not(:last-child) {
    border-right: 1px solid #aaaaaa30;
  }
`;

export const Stats = styled.span`
  color: #aaa;
  :nth-of-type(2) {
    font-size: 20px;
    color: #000;
  }
`;
