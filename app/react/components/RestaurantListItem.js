import React, { Component } from 'react';

const RestaurantsListItem = ({ restaurant }) => (
  <a href='/restaurant/{restaurant.id}'>{restaurant.name}</a>
);

export default RestaurantsListItem;

