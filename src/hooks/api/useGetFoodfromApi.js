import useAsync from '../useAsync';
import * as foodsApi from '../../services/foodsApi';
import useToken from '../useToken';

export default function useGetFoodfromApi() {
  const token = useToken();
  
  const {
    data: foodapi,
    loading: GetFoodapiLoading,
    error: GetFoodapiError,
    act: getfoodapi
  } = useAsync((name) => foodsApi.getFoodfromApi(name, token), false);

  return {
    foodapi,
    GetFoodapiLoading,
    GetFoodapiError,
    getfoodapi
  };
}
