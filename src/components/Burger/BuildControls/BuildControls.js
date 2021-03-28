import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'
function BuildControls(props) {
    // console.log(props.ordered)
    const controls = [
        {
            label : "Salad",
            type : "salad",
        },
        {
            label : "Meat",
            type : "meat",
        },
        {
            label : "Bacon",
            type : "bacon",
        }
        ,{
            label : "Cheese",
            type : "cheese",
        }
        
    ]
    return (
        <div className={classes.BuildControls}>
            <p>Total Price : <strong>{ props.price.toFixed(2) }</strong></p>
            {
                controls.map(ctrl => {
                    return <BuildControl disabled={props.disabled[ctrl.type]} key={ctrl.label} label={ctrl.label} removed={() => props.ingredientRemoved(ctrl.type)} added={ () => props.ingredientAdded(ctrl.type) } />
                })
            }
            <button className={classes.OrderButton } onClick={ props.ordered } disabled={!props.purchaseable}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls
