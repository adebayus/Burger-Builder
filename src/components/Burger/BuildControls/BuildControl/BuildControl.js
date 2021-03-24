import classes from './BuildControl.module.css'
import React from 'react'

const BuildControl = (props) => {
    // console.log(props)
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>           
            <button disabled={props.disabled ? true : false} className={classes.Less} onClick={props.removed}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button> 
        </div>
    )
} 

export default BuildControl;
