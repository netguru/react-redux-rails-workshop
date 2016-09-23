import { restaurantsApi } from '../api';

const restaurantCreated = (restaurant) => ({
  type: 'RESTAURANT/CREATE',
  restaurant,
});

export const createRestaurant = (name, address, description) => dispatch => {
  restaurantsApi.createRestaurant(name, address, description)
    .then(result => dispatch(restaurantCreated(result.data)));
}
