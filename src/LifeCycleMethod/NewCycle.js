import React, { Component } from 'react'
import child from './child'

class NewCycle extends Component {
    constructor(props){
        super(props)
        this.state={
            x:10
        }
    }

  render() {
    return (

      <>
      <h2>component</h2>
      <h2>{this.props.x}.x</h2>
      <button onClick={()=>{this.setstate({x:this.state.x+10})}}>click</button>
      </>
    )
  }
}
export default NewCycle