
import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import {createPromise} from 'redux-promise-middleware';

import Navigation from './Reducers/Navigation';
import Home from './Reducers/Home';
import Steps from './Reducers/Steps';

export default createStore(
    combineReducers({
        Navigation,
        Home,
        Steps
    }),
    {},
    applyMiddleware(
        Thunk,
        createPromise({
            types: {
                fulfilled: 'success'
            }
        }),
        Logger
    )
);