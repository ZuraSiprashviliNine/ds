
import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component{
    render(){
        return (
            <h1>home page</h1>
        )
    }
}

const Actions = dispatch => {
    return {
    }
}
const States = store => {
    return {
    }
}

export default connect(Actions, States)(Home);