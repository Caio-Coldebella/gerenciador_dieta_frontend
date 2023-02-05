import { useEffect, useState } from 'react';
import mealinfos from '../../components/diet/meal-infos';
import useGetFoodofMeal from '../../hooks/api/useGetFoodofMeal';
import { toast } from 'react-toastify';

export function Mealinfos({ id, mealinserted }) {
  const [data, setData] = useState([]);
  const { getfoodofmeal } = useGetFoodofMeal();
  const [total, setTotal] = useState({
    cal: 0,
    carb: 0,
    prot: 0,
    fat: 0
  });

  useEffect(() => {
    getfoodofmeal(id)
      .then((res) => {setData(res);})
      .catch((err) => {toast(err);});
  }, [mealinserted]);

  useEffect(() => {
    const sum = { cal: 0, carb: 0, prot: 0, fat: 0 };
    for(let i=0; i<data.length; i++) {
      sum.cal += data[i].calories;
      sum.carb += data[i].carb;
      sum.prot += data[i].protein;
      sum.fat += data[i].fat;
    }
    sum.cal = sum.cal.toFixed(1);
    sum.carb = sum.carb.toFixed(1);
    sum.prot = sum.prot.toFixed(1);
    sum.fat = sum.fat.toFixed(1);
    setTotal(sum);
  }, [data]);
  
  return (
    <mealinfos.CONTAINER>
      <mealinfos.TXT color='#EB464F'><p>Calories</p><p>{total.cal} kcal</p></mealinfos.TXT>
      <mealinfos.TXT color='#3327B8'><p>Carbohydrate</p><p>{total.carb} g</p></mealinfos.TXT>
      <mealinfos.TXT color='#209924'><p>Protein</p><p>{total.prot} g</p></mealinfos.TXT>
      <mealinfos.TXT color='#FF6418'><p>Fat</p><p>{total.fat} g</p></mealinfos.TXT>
    </mealinfos.CONTAINER>
  );
}
