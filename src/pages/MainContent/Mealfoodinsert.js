import { useState } from 'react';
import meal from '../../components/diet/meal-styles';
import useGetFood from '../../hooks/api/useGetFood';
import useGetFoodfromApi from '../../hooks/api/useGetFoodfromApi';
import usePostFoodofMeal from '../../hooks/api/usePostFoodofMeal';
import { toast } from 'react-toastify';

export default function Mealfoodinsert({ searchfood, setSearchfood, action, mealid }) {
  const [foodname, setFoodname] = useState('');
  const [foodresult, setFoodresult] = useState([]);
  const [selectedfood, setSelectedfood] = useState();
  const [amount, setAmount] = useState('');
  const { getfood, GetFoodLoading } = useGetFood();
  const { getfoodapi, GetFoodapiLoading } = useGetFoodfromApi();
  const { postfoodofmeal, PostFoodofMealLoading } = usePostFoodofMeal();

  async function submitgetfood(event) {
    event.preventDefault();
    try {
      const food = await getfoodapi(foodname);
      setFoodresult(food);
    } catch {
      setFoodresult([]);
      toast('Food not found');
    }
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
      await postfoodofmeal(mealid, body);
      action();
    } catch (error) {
      toast('Fail');
    }
  }
  async function treatfoodname(name) {
    setFoodname(name);
    try {
      if(name.length>0) {
        const food = await getfood(name);
        setFoodresult(food);
      }else {
        setFoodresult([]);
      }
    } catch {
      toast('Fail');
    }
  }
  return (
    <>
      {searchfood&&(!selectedfood)?
        <meal.ADDFOOD onSubmit={submitgetfood}>
          <meal.INPUT label="name" type="text" placeholder="Search food" value={foodname} onChange={e => treatfoodname(e.target.value)} />
          <meal.BUTTON type="submit" disabled={GetFoodLoading || GetFoodapiLoading}>+</meal.BUTTON>
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
    </>
  );
}
