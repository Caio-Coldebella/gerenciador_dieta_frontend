import styled from 'styled-components';

const FOOD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => props.height || '40px'};
  width: 85%;
  margin: 5px 0 0 0;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  background-color: lightcyan;
  font-size: 16px;
`;

const FOODTXT = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  color: ${props => props.color || '#000000'};
`;

const mealfood = {
  FOOD,
  FOODTXT
};

export default mealfood;
