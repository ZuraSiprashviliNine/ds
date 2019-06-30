
import React from 'react';

import {connect} from 'react-redux';

class Navigation extends React.Component{
    render(){
        return (
            <div>navigation</div>
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

export default connect(Actions, States)(Navigation);