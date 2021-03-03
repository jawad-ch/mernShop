import React from 'react'
import PropTypes from 'prop-types'
import { EmptyStarIcon, FullStarIcon, HalfStarIcon } from './icons'

const Rating = ({ value, text }) => {
  const Star = ({ starVal }) => {
    switch (starVal) {
      case 'FULL':
        return <FullStarIcon />
      case 'HALF':
        return <HalfStarIcon />
      default:
        return <EmptyStarIcon />
    }
  }

  return (
    <div className="rating">
      <span>
        <Star starVal={value >= 1 ? 'FULL' : value >= 0.5 ? 'HALF' : 'EPMTY'} />
      </span>
      <span>
        <Star starVal={value >= 2 ? 'FULL' : value >= 1.5 ? 'HALF' : 'EPMTY'} />
      </span>
      <span>
        <Star starVal={value >= 3 ? 'FULL' : value >= 2.5 ? 'HALF' : 'EPMTY'} />
      </span>
      <span>
        <Star starVal={value >= 4 ? 'FULL' : value >= 3.5 ? 'HALF' : 'EPMTY'} />
      </span>
      <span>
        <Star starVal={value >= 5 ? 'FULL' : value >= 4.5 ? 'HALF' : 'EPMTY'} />
      </span>
      <span>{text && text}</span>
    </div>
  )
}

Rating.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
