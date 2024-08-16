import React, { Component } from 'react'

class SampleCom extends Component {
    constructor(props){
        super(props)
        this.fname="vv"
    }
    changeName(){
        this.fname="kk"
        console.log("inside function",this.fname)
        this.render()
    }
   
  render() {
    {console.log("render")}
    return (
        <>
       
        <h2>classcomponent {this.fname}</h2>
        <button onClick={this.changeName}>change the name</button>
        </>
      
    )
  }
}
export default SampleCom
