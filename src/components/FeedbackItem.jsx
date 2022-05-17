import React from "react";
import Card from "./shared/Card";
import PropTypes from 'prop-types' 
import {FaTimes} from 'react-icons/fa' 


export default function FeedbackItem({item, handleDelete }){

  return( 
    <Card>
      <div className="num-display">{item.rating}</div> <button onClick={() =>handleDelete(item.id)} className="close"> <FaTimes color="purple"/></button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}
 

FeedbackItem.propTypes = {
  item : PropTypes.object.isRequired,

}
