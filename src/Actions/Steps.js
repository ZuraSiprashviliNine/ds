
import config from '../config';

export function INIT_REG_STEP(){
    return {
        type: 'INIT:REG:STEP',
        payload: config.steps.reg.fields
    }
}

export function FILL_REG_STEP(data){
    return {
        type: 'FILL:REG:STEP',
        payload: data
    }
}
