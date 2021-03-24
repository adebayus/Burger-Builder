import React from 'react'
import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary'

function SideDrawer(props) {
    let attachedClasses = [classes.SideDrawer, classes.Close].join(' ')
    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open].join(' ')
    }
    return (
		<Auxiliary>
            <BackDrop show={props.show} ordered={ props.closed }/>
			<div className={attachedClasses}>
                <Logo height="10%"/>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxiliary>
	);
}

export default SideDrawer
