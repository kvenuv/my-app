import React, { Component } from 'react'

class child extends Component {
    constructor(props){
        super(props)
        this.state={
            count:this.props.data+10,
            product:"Dom"
        }
    }
    static getDerivedStateFromProps(props,state){  
        console.log("inside")
        return{
           ...state,count:props.data+10
        }
    }
    shouldComponentUpdate(){
        return false
    }
    getSnapshotBeforeUpdate(setState,setState){
        console.log("inside derived")
        return null

    }
    componentDidUpdate(){
        console.log("did update")
        return true
    }
    componentDidMount(){
        console.log("did mount")
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                this.setState({... this.state,product:json.title})
            })
    }
  render() {
    console.log("render")
    return (
      <>
      <h2>this is child</h2>
      <h2>props:{this.props.data}</h2>
      <h2>count:{this.state.count}</h2>
      <h2>product name: {this.state.product}</h2>

      </>
    )
  }
}
export default child
