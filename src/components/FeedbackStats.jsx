import React from 'react'

const FeedbackStats = ({feedback,average}) => { //these props are drilled from the parent components.
  return (
    <div className='feedback-stats'>
        <h1>{feedback.length} Reviews</h1>
        <h1>{average} Average</h1>
    </div>
  )
}

export default FeedbackStats