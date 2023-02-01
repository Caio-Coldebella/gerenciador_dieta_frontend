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

export async function getFoodsofMeal(mealId, token) {
  const response = await api.get(`/meals/${mealId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postFoodofMeal(mealId, body, token) {
  const response = await api.post(`/meals/${mealId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}
