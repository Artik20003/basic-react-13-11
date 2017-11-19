import React, {Component} from 'react'
import Comment from './Comment.js'

export default class CommentList extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const comments = this.props.comments.map((comment, index) => <li key = {comment.id}>
            <Comment comment = {comment} defaultOpen = {index < 3}/>
        </li>)
        if (comments.length === 0) return;
        return (
            <ul>
                {comments}
            </ul>
        )
    }
}



