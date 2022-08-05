 import { ListButton,ItemBtn,Btn } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({option,onClick}) => {

   const types =  Object.keys(option);
    return (
        <ListButton>
            {types.map(typ => <ItemBtn key={typ}>
                <Btn onClick={()=>onClick(typ)}>{typ}</Btn>
           </ItemBtn>) }
        </ListButton>
       
    )
}

