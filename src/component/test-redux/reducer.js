import { PLUS, MINUS } from './action'

const initState={count: 0};
export function countReducer(state=initState, action) {
    switch(action.type) {
        case PLUS: {
            return {
                count: state.count+1
            };
        }
        case MINUS: {
            return {
                count: state.count-1
            };
        }
        default: {
            return state;
        }
    }
}