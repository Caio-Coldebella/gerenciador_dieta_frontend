import useAsync from '../useAsync';
import * as foodsApi from '../../services/foodsApi';
import useToken from '../useToken';

export default function useGetFood() {
  const token = useToken();
  
  const {
    data: food,
    loading: GetFoodLoading,
    error: GetFoodError,
    act: getfood
  } = useAsync((name) => foodsApi.getFood(name, token), false);

  return {
    food,
    GetFoodLoading,
    GetFoodError,
    getfood
  };
}
