import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            msg:"inital"
        }
    }
//   static getDerivedStateFromProps(props,state){
//        console.log("before",props,state)
//        // state.msg=props.msg
//         console.log("after",props,state)
//         return {msg:props.msg}
//     }
    componentDidMount(){
        console.log("inside componentdidmount")
            setTimeout(()=>{
                this.setState({count:this.state.count+1})
            },1000)
         }
        // shouldComponentUpdate(newprops,newState){
        //     console.log("inside")
        //     console.log(newState.count)
        //     if(this.state.count===newState)
        // }
        render(){
            {console.log("render")}
            return(
                <>
                <h1>{this.state.count}</h1>
                <h2>{this.state.msg}</h2>
                </>
            )
        }
    }
    export default LifeCycle