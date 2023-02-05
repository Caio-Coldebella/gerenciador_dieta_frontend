import styled from 'styled-components';
import usePostFood from '../../hooks/api/usePostFood';
import { useState } from 'react';
import { toast } from 'react-toastify';
export default function InsertFood() {
  const [name, setName] = useState('');
  const [calories100g, setCalories100g] = useState('');
  const [carb100g, setCarb100g] = useState('');
  const [protein100g, setProtein100g] = useState('');
  const [fat100g, setFat100g] = useState('');
  const { PostFoodLoading, postfood } = usePostFood(); 

  async function submit(event) {
    event.preventDefault();
    try {
      const body = {
        name: name,
        calories100g: Number(calories100g),
        carb100g: Number(carb100g),
        protein100g: Number(protein100g),
        fat100g: Number(fat100g)
      };
      await postfood(body);
      setName('');
      setCalories100g('');
      setCarb100g('');
      setProtein100g('');
      setFat100g('');
      toast('Food info submited successfull');
    } catch (err) {
      toast('Fail on food creating, use number format 12.34');
    }
  }

  return (
    <>
      <FORM onSubmit={submit}>
        <INPUT label="name" type="text" required placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <INPUT label="calories" type="text" required placeholder="Calories (kcal) per 100g" value={calories100g} onChange={e => setCalories100g(e.target.value)} />
        <INPUT label="carb" type="text" required placeholder="Carbohydrate (g) per 100g" value={carb100g} onChange={e => setCarb100g(e.target.value)} />
        <INPUT label="protein" type="text" required placeholder="Protein (g) per 100g" value={protein100g} onChange={e => setProtein100g(e.target.value)} />         
        <INPUT label="fat" type="text" required placeholder="Fat (g) per 100g" value={fat100g} onChange={e => setFat100g(e.target.value)} />         
        <BUTTON type="submit" disabled={PostFoodLoading}>Submit</BUTTON>
      </FORM> 
    </>
  );
}

const FORM = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 90%;
  padding: 10px 10px 10px 10px;
`;

const INPUT = styled.input`
  width: 90%;
  height: 18%;
  padding: 0 0 0 10px;
  background-color: #FFFFFF;
  font-size: 20px;
`;

const BUTTON = styled.button`
  width: 90%;
  height: 20%;
  border-radius: 0 0 10px 10px;
  background-color: #4D7EC8;
`;
