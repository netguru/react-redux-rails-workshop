import React from 'react';
import cx from 'classnames';

const RatingStar = ({ active }) => (
  <div className={cx(
    'rating-star', {
      'rating-star__active': active,
    }
  )}></div>
)

const RatingStars = ({ rating }) => (
  <div className="rating-stars">
      {[0, 0, 0, 0, 0].map((star, index) => (
        <RatingStar active={rating >= index + 1} />
      ))}
  </div>
)

export default RatingStars;
