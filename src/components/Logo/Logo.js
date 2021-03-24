import React from 'react'
import BurgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

function Logo(props) {
    return (
        <div style={{ height: props.height}} className={classes.Logo}>
            <img src={BurgerLogo}/>
        </div>
    )
}

export default Logo
