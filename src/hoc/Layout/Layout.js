import React, { Component } from 'react';
import Auxilliary from '../Auxilliary/Auxilliary';
import classes from './Layout.module.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenedHandler = () =>{
        this.setState((prevState)=>{
            return { showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render(){
        return(
            <Auxilliary>
                <Navbar disappear={this.sideDrawerOpenedHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxilliary>
        );
    };
}

export default Layout;