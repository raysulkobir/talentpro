import initialStart from './initialStart';
import { LOADED } from './actionTypes';

 

const reducer = (state = initialStart, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload

        default:
            return state;
    }
}

export default reducer;