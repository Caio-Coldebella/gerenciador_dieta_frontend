import { useEffect, useState } from 'react';
import styled from 'styled-components';
import usePostMeal from '../../hooks/api/usePostMeal';
import useGetMeal from '../../hooks/api/useGetMeal';
import { toast } from 'react-toastify';

export default function Diet() {
  const [insertMeal, setInsertMeal] = useState(false);
  const [mealname, setMealname] = useState('');
  const [mealinserted, setMealinserted] = useState(false);
  const [data, setData] = useState({});
  const { PostMealLoading, postmeal } = usePostMeal(); 
  const { getmeal } = useGetMeal();

  useEffect(() => {
    getmeal()
      .then((res) => {setData(res);})
      .catch(() => toast('Fail on get meals data'));
  }, [mealinserted]);
  async function submit(event) {
    event.preventDefault();
    try {
      await postmeal(mealname);
      setInsertMeal(false);
      setMealname('');
      setMealinserted(!mealinserted);
    } catch (err) {
      toast('Fail on meal creating');
    }
  }
  return (
    <>
      {insertMeal?
        <ADDMEALOPEN onSubmit={submit}>
          <INPUT label="meal" type="text" placeholder="Name your meal" value={mealname} onChange={e => setMealname(e.target.value)} />
          <BUTTON type="submit" disabled={PostMealLoading}>+</BUTTON>
        </ADDMEALOPEN>
        :<ADDMEAL onClick={() => {setInsertMeal(true);}}><p>Add Meal</p></ADDMEAL>
      }
      {data?.meals?.map((el, index) => {return <MEAL key={index}>{el.name}</MEAL>;})}    
      {data.infos?
        <DIVMACROS>
          <TXT color='orange'>Calories: {data.infos.totalcalories} kcal</TXT>
          <TXT color='blue'>Carb: {data.infos.totalcarb} g</TXT>
          <TXT color='red'>Protein: {data.infos.totalprotein} g</TXT>
          <TXT color='yellow'>Fat: {data.infos.totalfat} g</TXT>
        </DIVMACROS>
        :null}
    </>
  );
}

const ADDMEAL = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 70%;
  margin: 50px 0 40px 0;
  border-radius: 20px;
  background-color: #ACF0EB;
  font-size: 26px;
  
`;

const ADDMEALOPEN = styled.form`
  display: flex;
  height: 10%;
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

const MEAL = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8%;
  width: 70%;
  margin: 10px 0 40px 0;
  border-radius: 20px;
  background-color: gray;
  font-size: 20px;
`;

const DIVMACROS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 20%;
  width: 70%;
  padding: 10px 10px 10px 10px;
  background-color: gray;
`;

const TXT = styled.p`
  font-size: 20px;
  color: ${props => props.color || '#000000'};
`;
