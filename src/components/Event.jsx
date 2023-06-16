import React, { Component } from 'react';

class Event extends Component {
    //event witth arowfunction
    handleClick01 = () => {
        console.log("Click01");
    }
    //Trong JSX khi sử dụng 1 sự kiện => nếu sử dụng handClick02() thì hàm sẽ được chạy ngay sau khi component mount
    handleClick02 = () => {
        console.log("Click02");
    }
    handleClick03 = () => {
        console.log("Click03");
    }
    handleClick04 = (element) => {
        console.log("Click04");
        console.log(element);
    }
    render() {
        
        return (
            <div>
                <button onClick={this.handleClick01}>Click1</button>
                <button onClick={this.handleClick02()}>Click2</button>
                <button onClick={() => this.handleClick03}>Click3</button>
                <button onClick={() =>this.handleClick04("Hello")}>Click4</button>

            </div>
        );
    }
}

export default Event;