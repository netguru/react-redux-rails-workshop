import React, { PropTypes } from 'react';

const RestaurantView = ({ restaurant }) => (
  <div className="restaurant">
    <p className="restaurant-name">{restaurant.name}</p>
    <p className="restaurant-address">{restaurant.address}</p>
    <p className="restaurant-description">{restaurant.description}</p>
  </div>
);

export default RestaurantView;
