import useAsync from '../useAsync';
import * as mealsApi from '../../services/mealsApi';
import useToken from '../useToken';

export default function useGetMeal() {
  const token = useToken();
  
  const {
    data: meal,
    loading: GetMealLoading,
    error: GetMealError,
    act: getmeal
  } = useAsync(() => mealsApi.getMeals(token), false);

  return {
    meal,
    GetMealLoading,
    GetMealError,
    getmeal
  };
}
