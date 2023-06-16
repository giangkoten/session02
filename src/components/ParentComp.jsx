import React, { Component } from 'react';
import ChildrenComp from './ChildrenComp';

class ParentComp extends Component {
    //Props
    //props viết tắt của properties
    //props dùng để lưuw trữ các atrribute 
    //props dùng để giao tiếp giữa các components với nhau(ví dụ từ cha xuống con)
    //Giá trị props không thể thay đổi
    //ParentComp => ChildrenComp
    //Có 3 kiểu truyền nội dung, nhưng nên dùng kiểu dynamic const title = "" vì nó có thể sửa chữa
    render() {
        const title = "Rikkei Academy"
        return (
            <div>
                <ChildrenComp titleParent = {title} course = {"ReactJS"}>
                    Time: 15 buổi
                </ChildrenComp>
            </div>
        );
    }
}

export default ParentComp;