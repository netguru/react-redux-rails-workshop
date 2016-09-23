import React, { Component } from 'react';
import RatingStars from './RatingStars'

const RestaurantComment = ({ comment }) => (
  <li className="list-group-item">
    {comment.description}
    <div className='pull-right'>
      <RatingStars rating={comment.rating} />
    </div>
  </li>
);

export default RestaurantComment;
