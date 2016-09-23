import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

const createApi = (url) => axios.create({
  baseURL: url,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  responseType: 'json',
});

export function createRestaurant(name, address, description) {
  return createApi(BASE_URL).post(`/restaurants`, {
    name,
    address,
    description,
  });
}

export function loadRestaurants() {
  return createApi(BASE_URL).get(`/`);
}

export function createComment(id, rating, description) {
  return createApi(BASE_URL).post(`/restaurants/${id}/comments`, {
    rating,
    description,
  });
};
