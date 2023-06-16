import React, { Component } from 'react';
import Baitap4Action from './Baitap4Action';

class Baitap4 extends Component {
    constructor(){
        super()
        this.state={
            seachText : "",
            data: [
                {name :"Giang",
                age: 23,
                height:166},
                {name :"Lam",
                age: 20,
                height:180},
                {name :"Phuc",
                age: 24,
                height:175},
                {name :"TheAnh",
                age: 18,
                height:180},
                {name :"Han",
                age: 28,
                height:164},
            ]
        }
    }
    handleSearch = (e) => {
       this.setState({
        seachText:  e.target.value
       })
    }
    render() {
        return (
            <div>
                <Baitap4Action handleSearch={this.handleSearch}></Baitap4Action>
                <table style={{margin: `0 auto`}}>
                    <thead>
                        <tr style={{fontWeight: `bold`}}>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Height</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.filter(item => {
                       
                        return (item.name.toLowerCase()).includes(this.state.seachText.toLowerCase())
                    })
                    .map((item,index)=>
                     {   return(<tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.height}</td>
                        </tr>
                        )}
                    )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Baitap4;