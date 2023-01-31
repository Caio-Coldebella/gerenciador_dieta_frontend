import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp, IoMdTrash } from 'react-icons/io';
import { useState } from 'react';
import useGetFood from '../../hooks/api/useGetFood';
import { toast } from 'react-toastify';
export default function Meal({ id, name }) {
  const [open, setOpen] = useState(false);
  const [foodname, setFoodname] = useState('');
  const { getfood } = useGetFood();

  async function submit(event) {
    event.preventDefault();
    try {
      const food = await getfood(foodname);
      console.log(food);
    } catch {
      toast('Fail');
    }
  }

  return(
    <MEAL open={open}>
      {open?
        <>
          <p>{name}</p>
          <IoIosArrowUp onClick={() => {setOpen(false);}}/>
          <ADDFOOD onSubmit={submit}>
            <INPUT label="name" type="text" placeholder="search food" value={foodname} onChange={e => setFoodname(e.target.value)} />
            <BUTTON type="submit">+</BUTTON>
          </ADDFOOD>
        </>:
        <>
          <p>{name}</p>
          <IoIosArrowDown onClick={() => {setOpen(true);}}/>
        </>}
    </MEAL>
  );
}

const MEAL = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.open?'20%':'8%'};
  width: 70%;
  margin: 10px 0 40px 0;
  border-radius: 20px;
  background-color: gray;
  font-size: 20px;
`;

const ADDFOOD = styled.form`
  display: flex;
  height: 50%;
  width: 70%;
  margin: 50px 0 40px 0;
  border-radius: 20px;
`;

const INPUT = styled.input`
  height: 100%;
  width: 70%;
`;

const BUTTON = styled.button`
  height: 100%;
  width: 30%;
  background-color: #ACF0EB;
`;
