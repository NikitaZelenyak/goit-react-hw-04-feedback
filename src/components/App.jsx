import { useState } from "react";


import { Section } from "./Section/Section";
import {  FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";



export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnType = {
    good,
    bad,
    neutral
  };
  
  const handlerIncrementFeedBack = (type) => {
  switch (type) {
    case "good":
     setGood(prevSt=> prevSt + 1)
      break;
   case "bad":
     setBad(prevSt=> prevSt + 1)
      break;
    case "neutral":
   setNeutral(prevSt=> prevSt + 1)
      break;
    default:
      return;
  }
}

  const countTotalFeedback = () => {
    return good + neutral + bad;
     };
  
  
  
  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / (countTotalFeedback() - neutral) * 100);
  }


      return (
          <div style={{
            marginLeft: 700,
        
          }}>
            <Section title={"Please leave feedback"}>
            <FeedbackOptions
              option={btnType}
              onClick={handlerIncrementFeedBack}
           >
                </FeedbackOptions>
            </Section>

            <Section title={"Statistics"} >
              {
                countTotalFeedback() > 0 ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}>
              </Statistics> :  <Notification message="There is no feedback"></Notification> }
            
             
            </Section>
            
           
        </div>

    )
}




