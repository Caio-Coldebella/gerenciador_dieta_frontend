import useAsync from '../useAsync';
import * as mealsApi from '../../services/mealsApi';
import useToken from '../useToken';

export default function useGetFoodofMeal() {
  const token = useToken();
  
  const {
    data: foodofmeal,
    loading: GetFoodofMealLoading,
    error: GetFoodofMealError,
    act: getfoodofmeal
  } = useAsync((mealId) => mealsApi.getFoodsofMeal(mealId, token), false);

  return {
    foodofmeal,
    GetFoodofMealLoading,
    GetFoodofMealError,
    getfoodofmeal
  };
}
