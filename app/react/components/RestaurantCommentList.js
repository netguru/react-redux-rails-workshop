import React from 'react';
import RestaurantComment from './RestaurantComment';

const RestaurantCommentList = ({ comments }) => (
  <div className="comments-list">
    <ul className="list-group">
      {comments.map((comment) => (
        <RestaurantComment key={comment.id} comment={comment} />
      ))}
    </ul>
  </div>
)
export default RestaurantCommentList;
