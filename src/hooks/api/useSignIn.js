import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';

export default function useSignIp() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn
  } = useAsync(authApi.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn
  };
}
