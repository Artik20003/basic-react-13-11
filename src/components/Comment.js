import React, {Component} from 'react'
import UserName from "./UserName";

export default class Comment extends Component {
    constructor(props){
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    render(){
        const {comment} = this.props
        const commentTextElement = this.state.isOpen && <div className="comment-text">{comment.text}</div>
        return (
            <div className="comment-block">
                <UserName userName={comment.user}/><a href="#" onClick={this.toggleShow}>{this.state.isOpen ? 'close' : 'open'}</a>
                {commentTextElement}
            </div>
        )
    }

    toggleShow = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}