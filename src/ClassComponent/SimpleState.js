import React, { Component } from 'react'

class SimpleState extends Component {
    constructor(props){
        super(props)
        this.state={
           user:"name",
           number:"password"
        }
    }
    changeUser=()=>{  // use Arrow functions best cases
        console.log("change data")
        // this.state.user="new name" (wrong way of updated props using state)
        this.setState({user:"vv", number:"777777777"}) //use this set state to updae any content in props
       
        console.log("data is updated",this.state.user) //it is showing console
    }
    
  render() {
    return (
      <>
      <h2>hello dom</h2>
      <h2>{this.state.user}</h2>
      <h3>data {this.state.number}</h3>
      <button onClick={this.changeUser}>change</button>
      </>
    )
  }
}
export default SimpleState
