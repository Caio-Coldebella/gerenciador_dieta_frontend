import api from './api';

export async function getMeals(token) {
  const response = await api.get('/meals/', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postMeal(name, token) {
  const response = await api.post('/meals/', { name: name }, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}
