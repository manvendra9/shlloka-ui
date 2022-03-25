import * as actionType from './action-type'
import initialState from './initial-state'

const reducer = (state = initialState, action) => {

    console.log(action);

    switch (action.type) {
        
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default reducer;
