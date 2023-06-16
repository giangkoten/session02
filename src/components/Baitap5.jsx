import React, { Component } from 'react';

class Baitap5 extends Component {
    constructor(){
        super()
        this.state={
            data: [
                { id: 1, Image: 'https://images.pexels.com/photos/12596469/pexels-photo-12596469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                { id: 2, Image: 'https://images.pexels.com/photos/12955330/pexels-photo-12955330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
            ],
            currentIndex : 0
        }
    }
    handleNext = (e) => {
        const {currentIndex , data} = this.state;
        const nextIndex = (currentIndex + 1)%data.length;
        this.setState({currentIndex: nextIndex})
    }
    handleBack = () => {
        const {currentIndex , data} = this.state;
        const preIndex = (currentIndex -1 + data.length)%data.length;
        this.setState({currentIndex: preIndex})
    }
    render() {
        const { data, currentIndex } = this.state;
        const currentImage = data[currentIndex].Image;
        return (
            <div>
                <img src={currentImage} />
                <button onClick={this.handleNext}>Next</button>
                <button onClick={this.handleBack}>Back</button>
            </div>
        );
    }
}

export default Baitap5;