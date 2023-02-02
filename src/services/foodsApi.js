import api from './api';

export async function getFood(name, token) {
  const response = await api.get(`/foods/${name}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postFood(body, token) {
  const response = await api.post('/foods/', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

export async function getFoodfromApi(name, token) {
  const response = await api.get(`/foods/api/${name}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}
