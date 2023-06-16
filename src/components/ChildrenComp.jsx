import React, { Component } from 'react';

class ChildrenComp extends Component {
    //State
    //Dùng để lưu trữ dữ liệu trong component đó => có thể thay đổi dữ liệu
    //Để sử dụng được state cần khai báo lớp bằng  constructor()
    //Và sử dụng super để gọi lớp
    //Để cập nhật lại state => sử dụng setState
    constructor(){
        super()
        this.state = {
            studentA: "Giang",
            question :"Học ReactJS có dễ không?",
            anwser:"Dễ",
            display:true,
        }
    }
    handleChangeState = () => {
        this.setState({
            anwser:"Không"
        })
    }
    handleToggleDisplay = () => {
        this.setState({
            display: !this.state.display,
        })
    }
    render() {
        return (
            <div>
                {/* {Nhận props từ component từ cha} */}
                <h2> {this.props.titleParent} - Khóa học : {this.props.course} </h2>
                <p>{this.props.children}</p>

                <h2>state</h2>
                <p>{this.state.studentA} - {this.state.question} - {this.state.anwser}</p>
                {/* {Quy tắc đặt tên
                 với các hàm xử lý việc gì đó sẽ có tiền tố trước là handle
                với các hàm xử lý một sự kiện gì đó => sẽ có tiền tố là on} */}
                <button onClick={this.handleChangeState}>Click!!!</button>

                {/* Cập nhật state liên tục */}
                {this.state.display ? 
                <div>
                    <p>Anh bách có nhiệt tình không?</p>
                    <p>Có</p>
                    <button onClick={this.handleToggleDisplay}>Rất nhiệt tình</button>
                </div>: 
                <div>
                    <p>Anh bách có nhiệt tình không?</p>
                    <p>Không</p>
                    <button onClick={this.handleToggleDisplay}>Rất hời hợt</button>
                </div>}
            </div>
        );
    }
}

export default ChildrenComp;