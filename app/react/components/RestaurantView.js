import React, { PropTypes } from 'react';
import RestaurantCommentList from './RestaurantCommentList';

const RestaurantView = ({ restaurant, comments }) => (
  <div>
    <div className="panel panel-primary">
      <p className="panel-heading">{restaurant.name}</p>
      <p className="panel-body">{restaurant.address}</p>
      <p className="panel-body">{restaurant.description}</p>
    </div>
    <h2>Comments</h2>
    <RestaurantCommentList comments={comments} />
  </div>
);

export default RestaurantView;
