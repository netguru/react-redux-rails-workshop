import React from 'react';

const RestaurantCommentList = ({comments}) => (
  <div className="comments-list">
    <ul>
      {comments.map((comment) => (
        <RestaurantComment key={comment.id} comment={comment} />
      ))}
    </ul>
  </div>
)
