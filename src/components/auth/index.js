import styled from 'styled-components';

export const CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  row-gap: 20px;
  background-color: #6D94CD;
`;

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.height || '50%'};
  width: 80%;
`;

export const BUTTON = styled.button`
  height: ${props => props.height || '10%'};
  width: 70%;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  background-color: #E0E0E0;
`;

export const DIVINPUT = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.height || '80%'};
  width: 100%;
  padding: 20px 0 20px 0;
  border-radius: 10px;
  background-color: #E0E0E0;
`;

export const INPUT = styled.input`
  height: ${props => props.height || '25%'};
  width: 90%;
  background-color: #F6F6F6;
  border: none;
  border-radius: 10px;
  font-size: 26px;
  ::placeholder {
    font-style: italic;
  }
`;

export const LOGO = styled.img`
  width: 120px;
  height: 120px;
`;
