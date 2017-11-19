import React, {Component} from 'react'

export default class UserName extends Component {
    render () {
        const {userName} = this.props;
        return (
            <b>{userName}</b>
        )
    }
}