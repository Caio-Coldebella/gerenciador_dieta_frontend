import styled from 'styled-components';

const ADDMEAL = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  width: 70%;
  margin: 50px 0 40px 0;
  border-radius: 20px;
  background-color: #ACF0EB;
  font-size: 26px;
  
`;

const ADDMEALOPEN = styled.form`
  display: flex;
  min-height: 70px;
  width: 70%;
  margin: 50px 0 40px 0;
  border-radius: 20px;
`;

const INPUT = styled.input`
  height: 100%;
  width: 75%;
  font-size: 16px;
  border-radius: 15px 0 0 15px;
`;

const BUTTON = styled.button`
  height: 100%;
  width: 25%;
  background-color: #ACF0EB;
  border-radius: 0 15px 15px 0;
`;

const DIVMACROS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 140px;
  width: 70%;
  padding: 10px 10px 10px 10px;
  margin-bottom: 30px;
`;

const TXT = styled.p`
  font-size: 20px;
  color: ${props => props.color || '#000000'};
`;

export const DIET = {
  ADDMEAL,
  ADDMEALOPEN,
  INPUT,
  BUTTON,
  DIVMACROS,
  TXT
};
