import React, { Component } from 'react';

const RestaurantsListItem = ({ restaurant }) => (
  <li><a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a></li>
);

export default RestaurantsListItem;
