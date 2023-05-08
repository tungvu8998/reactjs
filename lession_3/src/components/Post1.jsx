import React from "react";

class Post1 extends React.Component {
    constructor(props) {
        super();
        this.name1 = props.post?.title;
        this.content = props.post?.content ;
    }
    // name = "Post Name";
    // content = "Content";
    showLength = () => {
        return this.content?.length;
    }
    render() {
        return (
            <div>
                <h2>{this.name1}</h2>
                <p>{this.content}</p>
                <p>Length of content: {this.showLength()}</p>
            </div>
        )
    }
}

export default Post1;
