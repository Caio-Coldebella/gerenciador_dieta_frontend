import useAsync from '../useAsync';
import * as mealsApi from '../../services/mealsApi';
import useToken from '../useToken';

export default function usePostFoodofMeal() {
  const token = useToken();
  
  const {
    data: foodofmeal,
    loading: PostFoodofMealLoading,
    error: PostFoodofMealError,
    act: postfoodofmeal
  } = useAsync((mealId, body) => mealsApi.postFoodofMeal(mealId, body, token), false);

  return {
    foodofmeal,
    PostFoodofMealLoading,
    PostFoodofMealError,
    postfoodofmeal
  };
}
