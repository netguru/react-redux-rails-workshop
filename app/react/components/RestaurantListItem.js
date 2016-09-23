import React, { Component } from 'react';

const RestaurantsListItem = ({ restaurant }) => (
  <li className="list-group-item"><a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a><span className="badge pull-right">10</span></li>
);

export default RestaurantsListItem;
