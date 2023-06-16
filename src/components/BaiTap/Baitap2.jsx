import React, { Component } from 'react';

class Baitap2 extends Component {
    constructor(){
        super()
        this.state = {
            content : "Rikei Academy"
        }
    }
    handleChangeButton = () => {
        this.setState({
            
            content: this.state.content === "Rikei Academy" 
            ? "Where is begin dream"
            : "Rikei Academy"
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.content}</p>
                <button onClick={this.handleChangeButton}>Click!!!</button>
            </div>
        );
    }
}

export default Baitap2;