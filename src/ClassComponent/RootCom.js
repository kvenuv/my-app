import React, { Component } from 'react';
import Destructure from './ChildCom.js/Destructure';
import SingleCom from './ChildCom.js/SingleCom';

class RootCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            user:{
                username:"vv",
                role:"admin"
            }
        }
    }

    // Uncomment if you want to use these methods
    // login = () => {
    //     console.log("inside login");
    //     this.setState({ isLogged: true });
    // }

    // logout = () => {
    //     console.log("inside logout");
    //     this.setState({ isLogged: false });
    // }

    togglerUser = () => {
          // if(this.state.isLogged){
        //     this.setState({isLogged:false})
        // }
        // else{
        //     this.setState({isLogged:true})
        // }
        this.setState({ isLogged: !this.state.isLogged });
    }

    render() {
        {console.log("render")}
        return (
            <>
                {
                    this.state.isLogged?
                    <>
                    <Destructure userdata={this.State.user} togglerFunc={this.togglerUser}></Destructure>
                    </>:<>
                    <SingleCom></SingleCom>
                    </>
                        // <>
                        //     <h2>Welcome</h2>
                        //     {/* <button onClick={this.logout}>Logout</button> */}
                        //     <button onClick={this.togglerUser}>Logout</button>
                        // </> :
                        // <>
                        //     <h2>Please login</h2>
                        //     {/* <button onClick={this.login}>Login</button> */}
                        //     <button onClick={this.togglerUser}>Login</button>
                        // </>
                       
                }
            </>
        );
    }
}
export default RootCom;
