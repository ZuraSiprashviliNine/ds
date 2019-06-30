
import React from 'react';
import reactDOM from 'react-dom';

import Store from './store';
import {Provider} from 'react-redux';


import App from './Containers/App';

import './styles/bootstrap.min.css';
import 'normalize.css';
import './styles/style.scss';

reactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);