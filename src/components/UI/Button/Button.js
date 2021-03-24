import React from 'react'
import classes from './Button.module.css'

function Button(props) {

    // console.log(props.clicked)
    return (
        <button 
            onClick={props.clicked}
            className={[classes.Button, classes[props.type]].join(' ')}
            >
            {props.children}
        </button>
    )
}

export default Button
