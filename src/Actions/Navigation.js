
import Axios from 'axios';

import config from '../config';

export function INIT_PAGES_NAVIGATION(){
    return {
        type: 'INIT:PAGES:NAVIGATION',
        payload: config.pages
    }
}