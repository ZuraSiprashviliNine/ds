
import Axios from 'axios';

export function INIT_USERS_HOME(){
    return {
        type: 'INIT:USERS:HOME',
        payload: new Promise((resolve, reject) => {
            Axios.get('https://api.myjson.com/bins/ns55r')
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }
}