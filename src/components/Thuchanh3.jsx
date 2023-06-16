import React, { Component } from 'react';

class Thuchanh3 extends Component {
    constructor(){
        super()
        this.state={
            value:0,
        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({value:this.state.value +1})}>Click me!!!</button>
                <br />
                <label> số lần click :{this.state.value}</label>
            </div>
        );
    }
}

export default Thuchanh3;