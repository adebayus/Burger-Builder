import React from 'react'
import classes from './DrawerToggler.module.css'
function DrawerToggler(props) {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggler
