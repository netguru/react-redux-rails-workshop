import React, { Component } from 'react';
import RatingStars from './RatingStars'

const RestaurantsListItem = ({ restaurant }) => (
  <li className="list-group-item">
    <a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a>
    <div className="pull-right">
      <span className="badge primary">{restaurant.description}</span>
      <RatingStars rating={restaurant.average_rating} />
    </div>
  </li>
);

export default RestaurantsListItem;
