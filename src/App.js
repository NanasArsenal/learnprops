import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats"; //imported from feedback stats


function App() {
  //state for feedback
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log("App",id)
    if(window.confirm('Are you sure you want to delete')){
      setFeedback(feedback.filter((item) =>item.id !== id))
    }
  }
  let average = (feedback.reduce((pre,curr) => {
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
