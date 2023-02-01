import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import mealinfos from '../../components/diet/meal-infos';
import useGetFoodofMeal from '../../hooks/api/useGetFoodofMeal';
import { toast } from 'react-toastify';

export const Mealinfos = forwardRef((props, ref) => {
  const [data, setData] = useState([]);
  const { getfoodofmeal } = useGetFoodofMeal();
  const [total, setTotal] = useState({
    cal: 0,
    carb: 0,
    prot: 0,
    fat: 0
  });
  const [update, setUpdate] = useState(false);

  useImperativeHandle(ref, () => ({
    doSomething: () => {
      setUpdate(!update);
    }
  }));
  useEffect(() => {
    getfoodofmeal(props.id)
      .then((res) => {setData(res);})
      .catch((err) => {toast(err);});
  }, [update]);

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
      <mealinfos.TXT><p>Calories</p><p>{total.cal} kcal</p></mealinfos.TXT>
      <mealinfos.TXT color='green'><p>Carbohydrate</p><p>{total.carb} g</p></mealinfos.TXT>
      <mealinfos.TXT color='yellow'><p>Protein</p><p>{total.prot} g</p></mealinfos.TXT>
      <mealinfos.TXT><p>Fat</p><p>{total.fat} g</p></mealinfos.TXT>
    </mealinfos.CONTAINER>
  );
});
