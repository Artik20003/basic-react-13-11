import React, {Component} from 'react'
import Article from './Article'
import CommentList from './CommentList.js'

export default class ArticleList extends Component {
/*
    state = {
        count: 0
    }

    componentWillMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

*/
    render() {

        const articleElements = this.props.articles.map((article, index) => {

            const commentsListElement = article.comments && <CommentList comments = {article.comments}></CommentList>
            return (
                <li key = {article.id}>
                    <Article article = {article} defaultOpen = {index === 0}/>
                    {commentsListElement}
                </li>)
        })

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}