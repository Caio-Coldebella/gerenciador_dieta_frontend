import useAsync from '../useAsync';
import * as mealsApi from '../../services/mealsApi';
import useToken from '../useToken';

export default function useDeleteMeal() {
  const token = useToken();
  
  const {
    data: delmeal,
    loading: DeleteMealLoading,
    error: DeleteMealError,
    act: deletemeal
  } = useAsync((id) => mealsApi.deleteMeal(id, token), false);

  return {
    delmeal,
    DeleteMealLoading,
    DeleteMealError,
    deletemeal
  };
}
