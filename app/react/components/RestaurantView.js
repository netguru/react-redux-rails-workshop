import React, { PropTypes } from 'react';
import RestaurantCommentList from './RestaurantCommentList';

const RestaurantView = ({ restaurant, comments }) => (
  <div className="panel panel-primary">
    <p className="panel-heading">{restaurant.name}</p>
    <p className="panel-body">{restaurant.address}</p>
    <p className="panel-body">{restaurant.description}</p>
    <RestaurantCommentList comments={comments} />
  </div>
);

export default RestaurantView;
