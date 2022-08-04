 import { ListButton,ItemBtn,Btn } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ onGood, onBad, onNeutral }) => {
      
    return (
        <ListButton>
           <ItemBtn > <Btn 
                type='button' 
                onClick={onGood} >Good</Btn></ItemBtn>
               <ItemBtn > <Btn 
                type='button' 
                onClick={onBad}>Bad</Btn></ItemBtn>
               <ItemBtn > <Btn 
                type='button' 
            onClick={onNeutral}>Neutral</Btn></ItemBtn>
        </ListButton>
       
    )
}


