import useAsync from '../useAsync';
import * as foodsApi from '../../services/foodsApi';
import useToken from '../useToken';

export default function usePostFood() {
  const token = useToken();
  
  const {
    data: food,
    loading: PostFoodLoading,
    error: PostFoodError,
    act: postfood
  } = useAsync((bpdy) => foodsApi.postFood(bpdy, token), false);

  return {
    food,
    PostFoodLoading,
    PostFoodError,
    postfood
  };
}
