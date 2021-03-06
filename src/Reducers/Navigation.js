
const reducer = (state = {
    pages: [],
}, action) => {
    switch (action.type){
        case 'INIT:PAGES:NAVIGATION': {
            state = {
                ...state,
                pages: action.payload
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