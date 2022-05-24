import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStats = ({feedback,average}) => { //these props are drilled from the parent components.
  return (
    <div className='feedback-stats'>
        <h1>{feedback.length} Reviews</h1>
        <h1>{average} Average</h1>
    </div>
  )
}

export default FeedbackStats

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
  average: PropTypes.number.isRequired
}