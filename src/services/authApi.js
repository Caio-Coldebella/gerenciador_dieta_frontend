import api from './api';

export async function signIn(email, password) {
  const response = await api.post('/auth', { email, password });
  return response.data;
}
