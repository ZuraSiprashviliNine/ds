
import React from 'react';
import {Fragment} from 'react';

import {connect} from 'react-redux';

import Navigation from '../Components/Navigation';

import Pages from './pages';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Fragment>
                    <Navigation />
                    <Switch>
                        <Route
                            path={'/'}
                            component={Pages.Home}
                            exact={true}/>
                        <Route
                            component={() => (
                                <Redirect to={'/'}/>
                            )}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}


const States = store => {
    return {
        
    }
}
const Actions = dispatch => {
    return {
    }
};

export default connect(States, Actions)(App);