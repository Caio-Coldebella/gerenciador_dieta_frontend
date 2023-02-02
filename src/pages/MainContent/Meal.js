import { IoIosArrowDown, IoIosArrowUp, IoMdTrash } from 'react-icons/io';
import { useEffect, useState } from 'react';
import meal from '../../components/diet/meal-styles';
import useGetFoodofMeal from '../../hooks/api/useGetFoodofMeal';
import useDeleteMeal from '../../hooks/api/useDeleteMeal';
import { toast } from 'react-toastify';
import Mealfood from './Mealfood';
import { Mealinfos } from './Mealinfos';
import Mealfoodinsert from './Mealfoodinsert';
export default function Meal({ id, name, setMealinserted, mealinserted }) {
  const [open, setOpen] = useState(false);
  const [searchfood, setSearchfood] = useState(false);
  const [fooddata, setFooddata] = useState([]);
  const { getfoodofmeal } = useGetFoodofMeal();
  const { deletemeal } = useDeleteMeal();

  useEffect(() => {
    getfoodofmeal(id)
      .then((res) => {setFooddata(res);})
      .catch((err) => {toast(err);});
  }, [mealinserted]);
  async function action() {
    setMealinserted(!mealinserted);
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
          <Mealfoodinsert searchfood={searchfood} setSearchfood={setSearchfood} action={action} mealid={id}/>
          <Mealinfos id={id} mealinserted={mealinserted}/>
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
