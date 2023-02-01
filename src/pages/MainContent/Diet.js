import { useEffect, useState } from 'react';
import usePostMeal from '../../hooks/api/usePostMeal';
import useGetMeal from '../../hooks/api/useGetMeal';
import { toast } from 'react-toastify';
import { DIET } from '../../components/diet';
import Meal from './Meal';

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
        <DIET.ADDMEALOPEN onSubmit={submit}>
          <DIET.INPUT label="meal" type="text" placeholder="Name your meal" value={mealname} onChange={e => setMealname(e.target.value)} />
          <DIET.BUTTON type="submit" disabled={PostMealLoading}>+</DIET.BUTTON>
        </DIET.ADDMEALOPEN>
        :<DIET.ADDMEAL onClick={() => {setInsertMeal(true);}}><p>Add Meal</p></DIET.ADDMEAL>
      }
      {data?.meals?.map((el, index) => {return <Meal key={index} id={el.id} name={el.name} setMealinserted={setMealinserted} mealinserted={mealinserted}/>;})}    
      {data.infos?
        <DIET.DIVMACROS>
          <DIET.TXT color='orange'>Calories: {data.infos.totalcalories} kcal</DIET.TXT>
          <DIET.TXT color='blue'>Carb: {data.infos.totalcarb} g</DIET.TXT>
          <DIET.TXT color='red'>Protein: {data.infos.totalprotein} g</DIET.TXT>
          <DIET.TXT color='yellow'>Fat: {data.infos.totalfat} g</DIET.TXT>
        </DIET.DIVMACROS>
        :null}
    </>
  );
}
