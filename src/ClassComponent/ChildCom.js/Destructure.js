import React, { Component } from 'react'

class Destructure extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const {username, role}=this.props.userdata  //using destruction many data in Root com
    {console.log(this.props)}
    return (
        <>
        <h2>Welcome {username}</h2>
        <h2>Role {role}</h2>
        <button onClick={this.props.toggleFunc}>logout</button>
        </>
      
    )
  }
}
export default Destructure