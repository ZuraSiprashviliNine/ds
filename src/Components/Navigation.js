
import React from 'react';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import { INIT_PAGES_NAVIGATION } from '../Actions/Navigation';

function NavigationItem(props){
    return (
        <li className="navigation-pages-list-item">
            <Link
                data-slag={props.slag}
                className="navigation-pages-list-item-link"
                to={props.link}>
                <div className="navigation-pages-list-item-link-text">
                    {props.title}
                </div>
            </Link>
        </li>
    )
}

class NavigationPagesRenderer extends React.Component{
    render(){
        return this.props.pages.map((item, index) => (
            <NavigationItem {...item} key={index} />
        ))
    }
}

class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(!this.props.Navigation.pages.length){
            this.props.initPages()
        }
    }
    render(){
        if(this.props.Navigation.pages.length){
            return (
                <div className="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-phone-12">
                                <div className="navigation-pages">
                                    <ul className="navigation-pages-list">
                                        <NavigationPagesRenderer pages={this.props.Navigation.pages}/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null;
        }
    }
}

const Actions = dispatch => {
    return {
        initPages: () => {
            dispatch(INIT_PAGES_NAVIGATION());
        }
    }
}
const States = store => {
    return {
        Navigation: store.Navigation
    }
}

export default connect(States, Actions)(Navigation);