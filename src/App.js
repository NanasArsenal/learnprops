import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData"; //data from remote data file
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats"; //imported from feedback stats


function App() {
  //state for feedback
  const [feedback, setFeedback] = useState(FeedbackData); //passing data to our feedbackvariable using useState hoook

  //deleting feedback action
  const deleteFeedback = (id) => {
    console.log("App",id)
    if(window.confirm('Are you sure you want to delete')){
      setFeedback(feedback.filter((item) =>item.id !== id))//if item deleted create and return new feedback array in the dom without the deleted item
    }
  }


  let average = (feedback.reduce((pre,curr) => { //function for claculating the average
      return pre + curr.rating;
  },0))/feedback.length
  
  console.log(average);
  return (
    <>
      <Header/>
      <div className="container"> 
          <FeedbackStats feedback={feedback} average={average}/>
         <FeedbackList feedback={feedback} HandleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
