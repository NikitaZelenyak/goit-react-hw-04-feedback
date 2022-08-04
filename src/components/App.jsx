
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

import {useState} from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countTotalFeedback = () => {
    return good + neutral + bad;
     };
  
  
  
  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / (countTotalFeedback() - neutral) * 100);
  }


      return (
          <div style={{
            marginLeft: 600,
        
          }}>
            <Section title={"Please leave feedback"}>
           <FeedbackOptions
              onGood={ ()=> setGood(prevSt=> prevSt + 1)}
              onBad={ ()=> setBad(prevSt=> prevSt + 1)}
              onNeutral={()=> setNeutral(prevSt=> prevSt + 1)}
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




