import React, { PropTypes } from 'react';
import RestaurantComment from './RestaurantComment';

const RestaurantView = ({ restaurant }) => (
  <div className="panel panel-primary">
    <p className="panel-heading">{restaurant.name}</p>
    <p className="panel-body">{restaurant.address}</p>
    <p className="panel-body">{restaurant.description}</p>
    <RestaurantComment comment={{
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 123,
    }} />
  </div>
);

export default RestaurantView;
