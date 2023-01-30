import useAsync from '../useAsync';
import * as mealsApi from '../../services/mealsApi';
import useToken from '../useToken';

export default function usePostMeal() {
  const token = useToken();
  
  const {
    data: meal,
    loading: PostMealLoading,
    error: PostMealError,
    act: postmeal
  } = useAsync((name) => mealsApi.postMeal(name, token), false);

  return {
    meal,
    PostMealLoading,
    PostMealError,
    postmeal
  };
}
