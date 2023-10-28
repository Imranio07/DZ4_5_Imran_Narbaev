import {createStore} from 'redux'
import { INCREMENT } from './types'

const initialState = {
    buy: []
}

const reducer=(state=initialState,action) => {
    console.log(99)
    console.log('reducer>', action.payload)
    const {type, payload} = action
    switch(type) {
        case INCREMENT:
            return {
        ...state,
        buy: [...state.buy, payload],
      };
        default:
            return state;
    }
    return state;
}
const store = createStore(reducer);
export default store;