import React, { Component } from 'react';

const RestaurantsListItem = ({ restaurant }) => (
  <a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a>
);

export default RestaurantsListItem;
