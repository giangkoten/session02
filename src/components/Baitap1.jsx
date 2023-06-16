import React, { Component } from 'react';

class Thuchanh6 extends Component {
    constructor(){
        super()
        this.state={
            number:"",
            array:[],
            total:0,
        }
        
    }
    handleChangleInput = (e) => {
        this.setState({
            number: + e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            array:[...this.state.array, this.state.number],
            total: this.state.total + this.state.number,
            number:""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="number"
                    value={this.state.number}
                    onChange={this.handleChangleInput} 
                    />
                    <button type='submit'>Add</button>
                </form>
                <span>Ket qua:</span>
                <div>{this.state.array.join("+")+ "="+ this.state.total}</div>
            </div>
        );
    }
}

export default Thuchanh6;