import { IoIosArrowDown, IoIosArrowUp, IoMdTrash } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import meal from '../../components/diet/meal-styles';
import useGetFood from '../../hooks/api/useGetFood';
import usePostFoodofMeal from '../../hooks/api/usePostFoodofMeal';
import useGetFoodofMeal from '../../hooks/api/useGetFoodofMeal';
import useDeleteMeal from '../../hooks/api/useDeleteMeal';
import { toast } from 'react-toastify';
import Mealfood from './Mealfood';
import { Mealinfos } from './Mealinfos';
export default function Meal({ id, name, setMealinserted, mealinserted }) {
  const [open, setOpen] = useState(false);
  const [searchfood, setSearchfood] = useState(false);
  const [foodname, setFoodname] = useState('');
  const [foodresult, setFoodresult] = useState([]);
  const [selectedfood, setSelectedfood] = useState();
  const [amount, setAmount] = useState('');
  const [updateFoods, setUpdateFoods] = useState(false);
  const [fooddata, setFooddata] = useState([]);
  const { getfood, GetFoodLoading } = useGetFood();
  const { postfoodofmeal, PostFoodofMealLoading } = usePostFoodofMeal();
  const { getfoodofmeal } = useGetFoodofMeal();
  const { deletemeal } = useDeleteMeal();

  const childRef = useRef();

  useEffect(() => {
    getfoodofmeal(id)
      .then((res) => {setFooddata(res);})
      .catch((err) => {toast(err);});
  }, [updateFoods]);

  async function submitgetfood(event) {
    event.preventDefault();
    try {
      const food = await getfood(foodname);
      setFoodresult([food]);
    } catch {
      toast('Fail');
    }
  }
  async function action() {
    setUpdateFoods(!updateFoods);
    childRef.current.doSomething();
  }
  async function submitpostfood(event) {
    event.preventDefault();
    try {
      const amountn = Number(amount);
      const body = {
        name: selectedfood.name,
        quantity: amountn,
        calories: selectedfood.calories100g*(amountn/100),
        carb: selectedfood.carb100g*(amountn/100),
        protein: selectedfood.protein100g*(amountn/100),
        fat: selectedfood.fat100g*(amountn/100)
      };
      setAmount('');
      setSelectedfood(null);
      setFoodresult([]);
      setFoodname('');
      setSearchfood(false);
      await postfoodofmeal(id, body);
      await action();
    } catch (error) {
      toast('Fail');
    }
  }
  return(
    <meal.MEAL open={open}>
      {open?
        <>
          <meal.BOXTOP>
            <p>{name}</p>
            <meal.BOXARROW>
              <IoIosArrowUp onClick={() => {setOpen(false); setSearchfood(false);}} size={25}/>
            </meal.BOXARROW>
          </meal.BOXTOP>
          {fooddata.length>0?
            fooddata.map((el, index) => 
            {return <Mealfood key={index} id={el.id} mealid={el.id} name={el.name} quantity={el.quantity} calories={el.calories} carb={el.carb} protein={el.protein} fat={el.fat} action={action}/>;})
            :<meal.ADVICE>You haven't added any food yet.</meal.ADVICE>}
          {searchfood&&(!selectedfood)?
            <meal.ADDFOOD onSubmit={submitgetfood}>
              <meal.INPUT label="name" type="text" placeholder="Search food" value={foodname} onChange={e => setFoodname(e.target.value)} />
              <meal.BUTTON type="submit" disabled={GetFoodLoading}>+</meal.BUTTON>
            </meal.ADDFOOD>:
            (!selectedfood?<meal.INSERTMEAL onClick={() => {setSearchfood(true);}}>Insert new food</meal.INSERTMEAL>:null)
          }
          {foodresult.length>0&&searchfood&&(!selectedfood)?
            foodresult.map((el, index) => {return <meal.RESULT key={index} onClick={() => {setSelectedfood(foodresult[index]);}}>{el.name}</meal.RESULT>;})
            :null}
          {selectedfood?
            <meal.ADDFOOD onSubmit={submitpostfood}>
              <meal.INPUT label="quantity" type="text" placeholder="Amount (g)" value={amount} onChange={e => setAmount(e.target.value)} />
              <meal.BUTTON type="submit" disabled={PostFoodofMealLoading}>OK</meal.BUTTON>
            </meal.ADDFOOD>:null}
          <Mealinfos id={id} ref={childRef}/>
          <meal.BOXTOP><IoMdTrash size={25} onClick={async() => {await deletemeal(id); setMealinserted(!mealinserted); setOpen(false);}}/></meal.BOXTOP>
        </>:
        <>
          <meal.BOXTOP>
            <p>{name}</p>
            <meal.BOXARROW>
              <IoIosArrowDown onClick={() => {setOpen(true);}} size={25}/>
            </meal.BOXARROW>
          </meal.BOXTOP>
        </>}
    </meal.MEAL>
  );
}
