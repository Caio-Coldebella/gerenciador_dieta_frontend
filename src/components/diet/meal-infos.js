import styled from 'styled-components';

const CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 140px;
  width: 85%;
  margin: 10px 0 0 0;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  background-color: lightyellow;
  font-size: 16px;
`;

const TXT = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  color: ${props => props.color || '#000000'};
`;

const mealinfos = {
  CONTAINER,
  TXT
};

export default mealinfos;
