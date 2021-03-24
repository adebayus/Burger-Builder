import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
function OrderSummary(props) {
    // console.log("[order Summarty ]",props.ingredients['salad'])
    let i= 0;
    const ingredientSummary = Object.keys(props.ingredients)
    .map( (igKey) => {
        i++;
        return <li key={igKey+i}><span style={{textTransform: 'capitalize'} }>{igKey} </span>: { props.ingredients[igKey]} </li>
    })
    return (
        <Auxiliary>
            <h3>
                Your Order 
            </h3>
            <p>
                A Delicious burger with The following ingredient
            </p>
            <ul>
                {
                    ingredientSummary
                }
            </ul>
            <p>
                <strong>Total Price : {props.price.toFixed(2)}</strong>
            </p>
            <p>
                Continue to CheckOut
            </p>
            <Button type="Danger" clicked={props.clicked}>Cancel</Button>
            <Button type="Success"clicked={props.continue}>Continue</Button>
        </Auxiliary>
    )
}

export default OrderSummary
