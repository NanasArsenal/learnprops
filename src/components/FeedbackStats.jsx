import React from 'react'

const FeedbackStats = ({feedback,average}) => {
  return (
    <div className='feedback-stats'>
        <h1>{feedback.length} Reviews</h1>
        <h1>{average} Average</h1>
    </div>
  )
}

export default FeedbackStats