import React, { Component } from 'react';

class Baitap4Action extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handleSearch} />
               
            </div>
        );
    }
}

export default Baitap4Action;