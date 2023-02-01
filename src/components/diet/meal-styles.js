import styled from 'styled-components';

const MEAL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${props => props.open?'fit-content':'8%'};
  width: 70%;
  margin: 10px 0 40px 0;
  padding: 10px 10px 10px 10px;
  border-radius: 20px;
  background-color: gray;
`;

const BOXTOP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 70%;
  height: 40px;
  font-size: 20px;
`;
const BOXARROW = styled.div`
  position: absolute;
  right: 10px;
  top: calc(50% - 12.5px);
  width: 40px;
  height: 100%;
`;

const INSERTMEAL = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 85%;
  margin: 30px 0 0 0;
  border: 2px dashed black;
  border-radius: 15px;
  background-color: #FFFFFF;
  font-size: 16px;
`;

const ADDFOOD = styled.form`
  display: flex;
  height: 40px;
  width: 85%;
  margin: 30px 0 0 0;
  border-radius: 15px;
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

const RESULT = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: calc(85% - 20px);
  background-color: #FFFFFF;
  font-size: 16px;
`;

const ADVICE = styled.p`
  font-size: 16px;
  color: lightgray;
  margin-top: 5px;
`;

const meal = {
  MEAL,
  BOXTOP,
  BOXARROW,
  ADDFOOD,
  INPUT,
  BUTTON,
  RESULT,
  INSERTMEAL,
  ADVICE
};

export default meal;
