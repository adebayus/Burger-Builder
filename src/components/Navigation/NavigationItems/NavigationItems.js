import React from 'react'
import classes from './NavigationItems.module.css'
import Items from './NavigationItem/NavigationItem'
function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <Items link="/" active={true} > A Link </Items>
            <Items link="/"  > A Link </Items>
        </ul>
    )
}

export default NavigationItems
