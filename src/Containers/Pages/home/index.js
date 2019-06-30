
import React from 'react';

import {connect} from 'react-redux';

import {INIT_USERS_HOME} from '../../../Actions/Home';

import {Link} from 'react-router-dom';

function User(props){
    return (
        <Link 
            to={`/users/${props.slag}`}
            className="home-user">
            {
                props.firstName || props.lastName ? (
                    <div className="home-user-title">
                        {props.firstName ? (
                            <span>{props.firstName} </span>
                        ) : null}
                        {props.lastName ? (
                            <span> {props.lastName}</span>
                        ): null}
                    </div>
                ): null
            }
            {
                props.text ? (
                    <div className="home-user-text">
                        {props.text}
                    </div>
                ): null
            }
            <div className="home-user-link">
                learn more
            </div>
        </Link>
    )
}

class UserRenderer extends React.Component{
    render(){
        return this.props.users.map((user, index) => (
            <User key={index} {...user}/>
        ))
    }
}

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(!this.props.Home.users.length){
            this.props.initUsers()
        }
    }

    render(){
        if(this.props.Home.users.length){
            return (
                <main className="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-desktop-8 offset-desktop-2 col-laptop-10 offset-laptop-1 col-phone-12">
                                <div className="home-wrap">
                                    <div className="home-users">
                                        <UserRenderer users={this.props.Home.users}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }else{
            return null;
        }
    }
}

const Actions = dispatch => {
    return {
        initUsers: () => {
            dispatch(INIT_USERS_HOME())
        }
    }
}
const States = store => {
    return {
        Home: store.Home
    }
}

export default connect(States, Actions)(Home);