import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'  

function FeedbackList({feedback,HandleDelete}) {
    return (
    <div className='feedback-list'>
        {feedback.map((item)  => (
            <FeedbackItem key={item.id} item={item} handleDelete={HandleDelete} />
        ))}
    </div>
  )
}

FeedbackList.propTypes = {
    feedback : PropTypes.array.isRequired,
}

export default FeedbackList