import { restaurantsApi } from '../api';

export const createRestaurant = (name, address, description) => dispatch => {
  restaurantsApi.createRestaurant(name, address, description)
    .then(result => {
      window.location = `/restaurants/${result.data.id}`;
    });
}
