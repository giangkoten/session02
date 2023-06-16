import React, { Component } from 'react';

class Baitap3 extends Component {
    constructor(){
        super()
        this.state ={
            content: "",
            isShow: false,
        }
    }
    handleChange = (e) => {
       this.setState({
        content: e.target.value
       })  
    }
    handleSubmit = (e) => {
       e.preventDefault()
    }
    handleClick = (e) => {
        this.setState({
            isShow: this.state.isShow == true ? false : true
            //hoawcj vieets : isShow : !this.satte.isShow 
        })
         
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Click!</button>
                </form>
                
                {this.state.isShow == true ? <p>{this.state.content}</p> : null}
            </div>
        );
    }
}

export default Baitap3;