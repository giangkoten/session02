import React, { Component } from 'react';

class Thuchanh7 extends Component {
    constructor(){
        super()
        this.state={
            color:"black",
            isShow: true,
            fontSize:12,
            content:"Rikei Academy",
        }
    }
    handleToggle = () => {
        this.setState({
            isShow:!this.state.isShow
        })
    }
    handChangeBackground = () => {
        this.setState({
            color: this.state.color === "black" ? "pink" : "black",
            fontSize: this.state.fontSize === 12 ? 14 : 12,
            content: 
            this.state.content === "Rikei Academy" 
            ? "Where is begin dream"
            : "Rikei Academy"
        })
    }
    render() {
        return (
            <div>
                {this.state.isShow ? (
                    <>
                    <p style={{color: this.state.color, fontSize: this.state.fontSize}}>
                        {this.state.content}
                    </p>
                    <button onClick={this.handChangeBackground}>Changge</button>
                    </>
                ):(
                    ""
                )}
                <button onClick={this.handleToggle}>Toggle</button>
            </div>
        );
    }
}

export default Thuchanh7;