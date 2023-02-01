import useAsync from '../useAsync';
import * as mealsApi from '../../services/mealsApi';
import useToken from '../useToken';

export default function useDeleteFoodofMeal() {
  const token = useToken();
  
  const {
    data: delfoodofmeal,
    loading: DeleteFoodofMealLoading,
    error: DeleteFoodofMealError,
    act: deletefoodofmeal
  } = useAsync((id) => mealsApi.deleteFood(id, token), false);

  return {
    delfoodofmeal,
    DeleteFoodofMealLoading,
    DeleteFoodofMealError,
    deletefoodofmeal
  };
}
