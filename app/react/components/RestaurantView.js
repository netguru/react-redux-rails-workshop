import React, { PropTypes } from 'react';

const RestaurantView = ({ restaurant }) => (
  <div className="panel panel-primary">
    <p className="panel-heading">{restaurant.name}</p>
    <p className="panel-body">{restaurant.address}</p>
    <p className="panel-body">{restaurant.description}</p>
  </div>
);

export default RestaurantView;
