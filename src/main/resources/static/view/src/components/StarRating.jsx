import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  [...Array(5)].map((_, index) => {
    const fullStars = Math.floor(rating);
    if (rating >= index) {
      return <FontAwesomeIcon key={index} icon={faStar} color="gold"/>;
    } else if (rating >= index - 0.5) {
      return <FontAwesomeIcon key={index} icon={faStarHalfAlt} color="gold"/>;
    } else {
      return <FontAwesomeIcon key={index} icon={faStar} color="lightgray"/>;
    }
  });
}

export default StarRating;