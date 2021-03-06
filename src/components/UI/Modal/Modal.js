import React from 'react'
import classes from './Modal.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

// import clasess from './Modal.module.css'
function Modal(props) {
    return (
		<Auxiliary>
			{console.log("[withError] Modal Mount")}
			<Backdrop show={props.show} ordered={props.ordered} />
			<div
				className={classes.Modal}
				style={{
					transform: props.show
						? "translateY(0)"
						: "translateY(-100vh)",
					opacity: props.show ? "1" : "0",
				}}
			>
				{props.children}
			</div>
		</Auxiliary>
	);
}

export default Modal
