
import React from 'react';
import {Fragment} from 'react';

import {connect} from 'react-redux';

import Navigation from '../Components/Navigation';

import Home from './Pages/home';
import {Header} from '../Components/Header';

import Reg from './Pages/reg';

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
                    <Header />
                    <Switch>
                        <Route
                            path={'/'}
                            component={Home}
                            // component={Reg.Step_2}
                            exact={true}/>
                        <Route 
                            path={'/step_2'}
                            component={Reg.Step_2}
                            exact={true}/>
                        <Route 
                            path={'/step_1'}
                            component={Reg.Step_1}
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