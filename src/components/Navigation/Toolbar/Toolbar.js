import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navigation from '../NavigationItems/NavigationItems'
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'

function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggler clicked={props.clicked}/>
            <Logo height="70%"/>
            <nav className={classes.DekstopOnly}>
                <Navigation/>
            </nav>
        </header>
    )
}

export default Toolbar
