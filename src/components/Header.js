import React from 'react';
import {connect} from 'react-redux';

function Header(props) {
    return (
    <h1>Hello you {props.username}</h1>
    )
}


export default connect (
    (state) => {
        return {
            username: state.user.name
        }
    },
    null
)(Header);