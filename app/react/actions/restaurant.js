import { restaurantsApi } from '../api';

const loadRestaurantsSuccess = (restaurants) => ({
  type: 'LOAD_RESTAURANTS_SUCCESS',
  restaurants: restaurants
});

export const onSearchChange = (value) => ({
  type: 'ON_SEARCH_CHANGE',
  value,
});

export const loadRestaurants = () => dispatch => {
  restaurantsApi.loadRestaurants().then(result => dispatch(
    loadRestaurantsSuccess(result.data)
  ));
}

export const createRestaurant = (name, address, description) => dispatch => {
  restaurantsApi.createRestaurant(name, address, description)
    .then(result => {
      window.location = `/restaurants/${result.data.id}`;
    });
}
