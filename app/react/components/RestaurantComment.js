import React, { Component } from 'react';

const RestaurantComment = ({ comment }) => (
  <div className="comments">
    <p className="panel-body">{comment.rating}</p>
    <p className="panel-body">{comment.description}</p>
  </div>
);

export default RestaurantComment;
