import { useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import mealfood from '../../components/diet/meal-food';
import useDeleteFoodofMeal from '../../hooks/api/useDeleteFoodofMeal';

export default function Mealfood({ id, mealid, name, quantity, calories, carb, protein, fat, action }) {
  const [open, setOpen] = useState(false);
  const { deletefoodofmeal } = useDeleteFoodofMeal();
  async function deletefood() {
    await deletefoodofmeal(id);
    action();
  }
  return(
    <mealfood.FOOD onClick={() => {setOpen(!open);}} height={open?'195px':'40px'}>
      {open?
        <>
          <mealfood.FOODTXT><p>{name}</p><p>{quantity} g</p></mealfood.FOODTXT>
          <mealfood.FOODTXT color='red'><p>Calories</p><p>{calories} kcal</p></mealfood.FOODTXT>
          <mealfood.FOODTXT color='orange'><p>Carbohydrates</p><p>{carb} g</p></mealfood.FOODTXT>
          <mealfood.FOODTXT color='yellow'><p>Protein</p><p>{protein} g</p></mealfood.FOODTXT>
          <mealfood.FOODTXT color='green'><p>Fat</p><p>{fat} g</p></mealfood.FOODTXT>
          <IoMdTrash size={25} onClick={() => {deletefood();}}/>
        </>:
        <mealfood.FOODTXT><p>{name}</p><p>{quantity} g</p></mealfood.FOODTXT>}
    </mealfood.FOOD>
  );
}
