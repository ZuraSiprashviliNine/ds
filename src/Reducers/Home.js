
const reducer = (state = {
    users: []
}, action) => {
    switch(action.type){
        case 'INIT:USERS:HOME_FULFILLED': {
            state = {
                ...state,
                users: action.payload
            };
            break;
        }
        default: {
            break;
        }
    }

    return state;
};

export default reducer;