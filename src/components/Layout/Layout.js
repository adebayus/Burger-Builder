import React,{Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from '../Layout/Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
// Aux its hoc 

 class Layout extends Component {
     state = {
         showSideDrawer:false
     }

     sideDrawerClosedHandle = () => {
        //  console.log("clicked")  
        this.setState({
            showSideDrawer: false
        })
     }

     sideDrawerToglerHandle = () => {
        this.setState( prevState => ({
            showSideDrawer: !prevState.showSideDrawer
        }))
        // this.setState(prevState =>( {
        //     showSideDrawer: !prevState.state.showSideDrawer
        // }))
     }
     render(){
         return (
            <Auxiliary>
            <Toolbar clicked={this.sideDrawerToglerHandle}/>
            <SideDrawer closed={this.sideDrawerClosedHandle} show={this.state.showSideDrawer}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxiliary>
         )
     }
 }


export default Layout;
