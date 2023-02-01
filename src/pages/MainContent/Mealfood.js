import { useState } from 'react';
import mealfood from '../../components/diet/meal-food';

export default function Mealfood({ id, mealid, name, quantity, calories, carb, protein, fat }) {
  const [open, setOpen] = useState(false);

  return(
    <mealfood.FOOD onClick={() => {setOpen(!open);}} height={open?'170px':'40px'}>
      {open?
        <>
          <mealfood.FOODTXT><p>{name}</p><p>{quantity} g</p></mealfood.FOODTXT>
          <mealfood.FOODTXT color='red'><p>Calories</p><p>{calories} kcal</p></mealfood.FOODTXT>
          <mealfood.FOODTXT color='orange'><p>Carbohydrates</p><p>{carb} g</p></mealfood.FOODTXT>
          <mealfood.FOODTXT color='yellow'><p>Protein</p><p>{protein} g</p></mealfood.FOODTXT>
          <mealfood.FOODTXT color='green'><p>Fat</p><p>{fat} g</p></mealfood.FOODTXT>
        </>:
        <mealfood.FOODTXT><p>{name}</p><p>{quantity} g</p></mealfood.FOODTXT>}
    </mealfood.FOOD>
  );
}
