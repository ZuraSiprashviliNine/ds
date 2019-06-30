
import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import {createPromise} from 'redux-promise-middleware';

import Navigation from './Reducers/Navigation';

export default createStore(
    combineReducers({
        Navigation
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