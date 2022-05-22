import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'  

function FeedbackList({feedback,HandleDelete}) { //these props are drilled from our app.js so they can be used in our component
    return (
    <div className='feedback-list'>
        {feedback.map((item)  => (
            <FeedbackItem key={item.id} item={item} handleDelete={HandleDelete} /> /*passing the values of the props of the parent component
            to the child component( FeedbackItem) imported */
        ))}
    </div>
  )
}

FeedbackList.propTypes = {
    feedback : PropTypes.array.isRequired,
}

export default FeedbackList