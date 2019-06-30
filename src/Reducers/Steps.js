
const reducer = (state = {
    reg: {
        fields: [],
        data: {}
    },
    info: {
        fields: [],
        data: {}
    }
}, action) => {
    switch(action.type){

        case 'INIT:REG:STEP': {
            state = {
                ...state,
                reg: {
                    ...state.reg,
                    fields: action.payload
                }
            };
            break;
        }

        case 'FILL:REG:STEP': {
            state = {
                ...state,
                reg: {
                    ...state.reg,
                    data: action.payload
                }
            };
            break;
        }
        
        default: {
            break;
        }
    }

    return state;
}

export default reducer;